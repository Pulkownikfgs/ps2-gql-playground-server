import axios from 'axios';
import {getServiceBaseUrl} from '../utils/url';

export interface Character {
  id: string;
  name: string;
}

export const getCharacters = (searchName: string): Promise<Character[]> =>
  axios
    .get(
      `${getServiceBaseUrl()}/character?name.first_lower=*${searchName.toLocaleLowerCase()}&c:limit=10`,
    )
    .then(({data}) => {
      if ('errorCode' in data) {
        const {errorCode, errorMessage} = data;
        throw new Error(`${errorCode}: ${errorMessage}`);
      }

      if (!('character_list' in data)) {
        throw new Error('no data');
      }

      return data.character_list.map((character) => {
        const {
          character_id,
          name: {first},
        } = character;
        return {
          id: character_id,
          name: first,
        };
      });
    });
