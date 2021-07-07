import axios from 'axios';
import {getServiceBaseUrl} from './utils/url';

import {Character, ICensusAPI} from './interfaces';
import {assertHasData, assertHasNoErrors} from './utils/assert';
import {CharactersResponse, mapCharacters} from './response/characters';

export class CensusAPI implements ICensusAPI {
  async getCharacters(searchName: string): Promise<Character[]> {
    const {data} = await axios.get(
      `${getServiceBaseUrl()}/character?name.first_lower=*${searchName.toLocaleLowerCase()}&c:limit=10`,
    );

    assertHasNoErrors(data);
    assertHasData<CharactersResponse>(data, 'character_list');

    return mapCharacters(data);
  }
}
