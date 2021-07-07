import {CensusAPI} from '../census-api';
import {IContext} from './interfaces';

export const createContext = (): IContext => {
  const censusApi = new CensusAPI();

  return {censusApi};
};
