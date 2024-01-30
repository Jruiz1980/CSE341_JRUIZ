const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Temples",
    description: "Temples API",
  },
  host: "localhost:8080/temples",
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });
