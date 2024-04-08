const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };



// // Routes/index.js refractored to Schema/index.js

// // Routes/index.js -> Schema/index.js
// const { ApolloServer } = require('apollo-server');
// const typeDefs = require('./typeDefs'); // Importing schema type definitions
// const resolvers = require('./resolvers'); // Importing schema resolvers

// // Initialize ApolloServer with type definitions and resolvers
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`Server ready at ${url}`);
// });
