import express from 'express';
import bodyParser from 'body-parser';
import log from 'fancy-log';
import routes from './routes';

// set port
const port = process.env.PORT || 8080;

// fire express function
const app = express();

// use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// home end point
app.use(routes);

app.listen(port, () => log(`app listening on port ${port}`));

module.exports = app;
