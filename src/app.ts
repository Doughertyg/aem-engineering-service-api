import express, { Request, Response } from 'express';

const app = express();
const port = Number(process.env.PORT) || 8080;
const cors = require('cors');

app.use(cors());

app.get('/romannumeral', (req: Request, res: Response) => {
  res.send('IV'); // TODO: replace with logic
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
