const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the application is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the applications static content
app.use(express.static('public'));

// // Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// // GetScores
apiRouter.get('/scores', async (_req, res) => {
   moviesBarbie = await DB.getBarbie();
   moviesBatman = await DB.getBatman();
   moviesHoly = await DB.getHoly();
   res.send([moviesBarbie, moviesBatman, moviesHoly]);
});

// // SubmitScore
apiRouter.post('/score', async (req, res) => {
    DB.addScore(req.body);
  });

//if doesnt work put in square brackets [moviesBarbie, .....]
// GetScores
// apiRouter.get('/scores', (_req, res) => {
//   res.send([moviesBarbie, moviesBatman, moviesHoly]);
// });

// SubmitScore
// apiRouter.post('/score', (req, res) => {
//   if(req.body.movie == 'barbie'){
//     moviesBarbie.push(req.body);
//   }
//   if(req.body.movie == 'batman'){
//     moviesBatman.push(req.body);
//   }
//   if(req.body.movie == 'holy'){
//     moviesHoly.push(req.body);
//   }
  
// });

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateScores considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.
let moviesBarbie = [];
let moviesBatman = [];
let moviesHoly = [];
