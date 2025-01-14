// middlewaress, le paso la ruta para poder consumir la API
const path = require('path')

module.exports = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'ONG api',
      version: '1.3.0',
      description: 'Api de la aceleracion de Alkemy',
    },
    servers: [
      {
        url: 'https://ot246-alkemy.herokuapp.com',
        description: 'Production server',
      },
      {
        url: 'http://localhost:3001',
        description: 'Development server',
      },
    ],
  },

  apis: [path.join(__dirname, '..', 'routes', '*.js'),

    path.join(__dirname, '..', 'docs', '*.js')],

}
