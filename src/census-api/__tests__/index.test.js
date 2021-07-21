import axios from 'axios';
import {charactersData, charactersResult, charactersEndpoint} from './data';
import {CensusAPI} from '../index';

jest.mock('../utils/url');
jest.mock('axios');

describe('census-api.CensusAPI', () => {
  it('Fetches characters from appropriate endpoint', () => {
    axios.get.mockResolvedValue({data: charactersData});

    const api = new CensusAPI();

    return api.getCharacters('test').then((characters) => {
      expect(axios.get).toBeCalledWith(charactersEndpoint);
      expect(characters).toEqual(charactersResult);
    });
  });
});
