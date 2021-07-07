import {Character} from '../interfaces';

export interface CharacterResponse {
  character_id: string;
  name: {
    first: string;
  };
}

export interface CharactersResponse {
  character_list: CharacterResponse[];
}

export const mapCharacters = (data: CharactersResponse): Character[] =>
  data.character_list.map((character) => {
    const {
      character_id,
      name: {first},
    } = character;

    return {
      id: character_id,
      name: first,
    };
  });
