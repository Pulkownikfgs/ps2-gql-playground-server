export interface Character {
  id: string;
  name: string;
}

export interface ICensusAPI {
  getCharacters: (searchName: string) => Promise<Character[]>;
}
