const express = require('express')
const app = express()
const port = 5500
const cors = require('cors')
const carousel=require('./data/carousel.json')
const chefs=require('./data/chefs.json')
const recipes=require('./data/recipes.json')
app.use(cors())
app.get('/', (req, res) => {
  res.send('chefs server.All data are store here')
})
app.get('/carousel', (req, res) => {
  res.send(carousel)
})
app.get('/chefs', (req, res) => {
  res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
  const id =req.params.id
  const selectedRecipe=recipes.filter(recipe=>recipe.id===id)
  res.send(selectedRecipe)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})