const express = require('express')
const teams = require('./teams')
const { getAllTeams, getTeamById } = require('./controller/teams')
const app = express()

app.get('/teams', getAllTeams)

app.get('/teams/:id', getTeamById)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
