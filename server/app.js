import express from 'express';
import bodyParser from 'body-parser';
import routes from '../server/routes/index';

const port = process.env.PORT || 8080;

// fire express
const app = express();

// use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use imported routes
//app.get('/', (req, res) => res.json({message: 'welcome to the demo of this API'}));
app.use(routes)

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

export default app;
