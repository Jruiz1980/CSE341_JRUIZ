const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API Contacts',
    description: 'Contacts API'
  },
  host: 'cse341-instructor.herokuapp.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);