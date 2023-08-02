const {getAllUsers,getOneUser, createUser, updateUser, deleteUser} = require( '../controllers/user.controller' )


const routes = async ( fastify, options ) => {
    fastify.get('/',getAllUsers)
    fastify.get('/:id',getOneUser)
    fastify.post('/',createUser)
    fastify.put('/:id',updateUser)
    fastify.delete('/:id',deleteUser)
}

module.exports = routes