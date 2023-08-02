const items = require('../items')
function itemRoutes (fastify, options, done){


    fastify.get('/items',  (req, res) => {
  res.send(items)
})
fastify.get('/items/:id',  (req, res) => {
  const {id} = req.params
  const item = items.find(item => item.id ===id)
  res.send(item)
})
done()
}

module.exports = itemRoutes 