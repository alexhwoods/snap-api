import * as fs from 'fs'
import { makeExecutableSchema } from 'graphql-tools'

import resolvers from '../resolvers'

const typeDefs = fs
  .readdirSync(__dirname)
  .filter(filename => /\.graphql$/.test(filename))
  .map(filename => `${__dirname}/${filename}`)
  .reduce((acc, filename) => acc.concat(fs.readFileSync(filename)), '')

export default makeExecutableSchema({ typeDefs, resolvers })
