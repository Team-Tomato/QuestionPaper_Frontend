//Ref - https://medium.com/jeremy-gottfrieds-tech-blog/tutorial-how-to-deploy-a-production-react-app-to-heroku-c4831dfcfa08

//Deploy - https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d
// Not using this server
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 3535;
const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/wastepath', function (req, res) {
 return res.send('Test working');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);