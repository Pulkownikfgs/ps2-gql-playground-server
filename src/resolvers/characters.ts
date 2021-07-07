import {IFieldResolver} from 'graphql-tools';
import {IContext} from '../context/interfaces';

export interface CharactersArgs {
  name: string;
}

export const characters: IFieldResolver<unknown, IContext, CharactersArgs> = (
  _,
  {name},
  {censusApi},
) => censusApi.getCharacters(name);
