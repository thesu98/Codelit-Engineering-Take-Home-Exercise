const express = require('express');
const { TeamMember } = require('./model');
const bodyParser = require("body-parser")

const app = express();

TeamMember.sequelize.sync().then(function(){
  console.log('Connected to database')
}).catch(function(err){
  console.log(err)
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post('/join', async (req, res) => {
  const member = await TeamMember.create(req.body);
  return res.json(member)
})

module.exports = app;
