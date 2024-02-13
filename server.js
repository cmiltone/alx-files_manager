import express from 'express';
import injectRoutes from './routes';
import envLoader from './utils/env_loader';

const startServer = (api) => {
  envLoader();
  const port = process.env.PORT || 5000;
  const env = process.env.npm_lifecycle_event || 'dev';
  api.listen(port, () => {
    console.log(`[${env}] API has started listening at port:${port}`);
  });
};

const app = express();

app.use(express.json({ limit: '200mb' }));
injectRoutes(app);
startServer(app);

export default app;
