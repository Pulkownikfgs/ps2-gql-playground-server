import {join} from 'path';
import {readFileSync} from 'fs';
import {gql} from 'apollo-server';

export const typeDefs = gql(
  readFileSync(join(__dirname, 'schema.graphql'), 'utf8'),
);
