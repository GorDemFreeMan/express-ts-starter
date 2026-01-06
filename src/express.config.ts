import { miscRouter } from '@/routes';
import playwrightRouter from '@/routes/index';
import compression from 'compression';
import 'dotenv/config';
import express, { type Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const ExpressConfig = (): Application => {
    const app = express();

    app.use(compression());
    app.use(
        express.urlencoded({
            extended: true,
        }),
    );
    app.use(express.json());

    app.use(helmet());
    app.use(morgan('dev'));

    app.use('/misc', miscRouter);
    app.use(playwrightRouter);  // Монтируем на корневой путь

    return app;
};
export default ExpressConfig;
