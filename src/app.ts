import express, { Request, Response } from 'express';
import router from './router/index';
import { errorHandlerMiddleware } from './middleware/error-handler';

const app = express();
const port = Number(process.env.PORT) || 8080;
const cors = require('cors');

app.use(cors());
app.use(router);
app.use(errorHandlerMiddleware);

if (process.env.TEST_SERVER && process.env.TEST_SERVER.trim() === 'true') {
  console.log('Server started to run test cases');
} else {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}

module.exports = app;
