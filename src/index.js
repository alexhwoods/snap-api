import express from 'express'
import cors from 'cors'
import graphqlHTTP from 'express-graphql'

import schema from './schema'

const rootValue = { healthy: () => true }

const app = express()

// enables CORS for our Express servers
// @see https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    rootValue,
  }),
)

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`Listening on port ${process.env.PORT}`)
})
