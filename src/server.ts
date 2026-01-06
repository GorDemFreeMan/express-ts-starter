import ExpressConfig from './express.config.js';

const app = ExpressConfig();
const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
    console.log(`>> Server Running on Port ${PORT} <<`);
});
