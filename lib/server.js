import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('Index');
});

app.listen(config.port, function listenhandler() {
  console.info(`Running on ${config.port}`);
});