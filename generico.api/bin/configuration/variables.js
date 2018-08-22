const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://administrador:nofood123456@ds127362.mlab.com:27362/itaprojetos'
    }
}
module.exports = variables;

