import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  console.log('RadicalStart');
  res.send('RadicalStart');
});

app.listen(3000);
