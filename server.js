var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world1!';
  },
};

var app = express();
//	ORIGINAL FORM:
//app.use('/graphql', graphqlHTTP({
//  schema: schema,
//  rootValue: root,
//  graphiql: true,
//}));
//	ALTERNATIVELLY, MORE GENERAL FORM:
app.use('/graphql', graphqlHTTP(()=>{
return {
  schema: schema,
  rootValue: root,
  graphiql: true,
}
}));

app.listen(4002);
console.log('Running a GraphQL API server at http://localhost:4002/graphql');