import { Router } from 'express';
import { chromium } from 'playwright';

const router = Router();
const activeBrowsers = new Map<string, any>();

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'playwright-api',
    timestamp: new Date().toISOString(),
    activeBrowsers: activeBrowsers.size
  });
});

// Launch browser
router.post('/browser/launch', async (req, res) => {
  try {
    const { sessionId = 'default' } = req.body;

    if (activeBrowsers.has(sessionId)) {
      return res.status(400).json({ error: 'Session exists' });
    }

    const browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    activeBrowsers.set(sessionId, {
      browser,
      pages: new Map(),
      createdAt: new Date()
    });

    res.json({
      success: true,
      message: 'Browser launched',
      sessionId
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Navigate
router.post('/browser/navigate', async (req, res) => {
  try {
    const { sessionId = 'default', url, pageId = 'page1' } = req.body;

    const session = activeBrowsers.get(sessionId);
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    let page = session.pages.get(pageId);
    if (!page) {
      page = await session.browser.newPage();
      session.pages.set(pageId, page);
    }

    await page.goto(url, { waitUntil: 'networkidle' });

    res.json({
      success: true,
      title: await page.title(),
      url: page.url()
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Close browser
router.post('/browser/close', async (req, res) => {
  try {
    const { sessionId = 'default' } = req.body;

    const session = activeBrowsers.get(sessionId);
    if (!session) return res.status(404).json({ error: 'Session not found' });

    for (const page of session.pages.values()) {
      await page.close();
    }
    await session.browser.close();
    activeBrowsers.delete(sessionId);

    res.json({ success: true, message: 'Browser closed' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
