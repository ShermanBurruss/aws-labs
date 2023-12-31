import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello, EC2 World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});