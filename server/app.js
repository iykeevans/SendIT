import express from 'express';
import bodyParser from 'body-parser';
import log from 'fancy-log';

// set port
const port = process.env.PORT || 8080;

// fire express function
const app = express();

// use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// home end point
app.get('/', (req, res) => {
  res.json({ message: 'welcome to my API' });
});

app.listen(port, () => log(`app listening on port ${port}`));

module.exports = app;
