require('dotenv').config({ path: "./config.env" });
const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const cors = require('cors')


const app = express();

app.use(cors());
app.use(
    '/',
    graphqlHTTP({
      schema,
      graphiql: true
    })
  );

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

process.on("unhandledRejections", (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
});