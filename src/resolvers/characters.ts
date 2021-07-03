import {IFieldResolver} from 'graphql-tools';
import {getCharacters} from '../data/characters';

export interface CharactersArgs {
  name: string;
}

export const characters: IFieldResolver<{}, {}, CharactersArgs> = (_, {name}) =>
  getCharacters(name);
