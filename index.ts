import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});

app.get('/sum/:a/:b', (req: Request, res: Response) => {
  const { a, b } = { a: req.params.a, b: req.params.b };
  const sum = Number(a) + Number(b);
  res.json({ message: 'Sum Operation', operation: 'success', a, b, sum });
});

app.get('/div/:a/:b', (req: Request, res: Response) => {
  const { a, b } = { a: req.params.a, b: req.params.b };
  const c = Number(a) / Number(b);
  res.json({ message: 'Div Operation', operation: 'success', a, b, c });
});

app.get('/subtract/:a/:b', (req: Request, res: Response) => {
  const { a, b } = { a: Number(req.params.a), b: Number(req.params.b) };
  const subtraction = a - b;
  res.json({ message: 'Subtract Operation', operation: 'success', a, b, subtraction });
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
