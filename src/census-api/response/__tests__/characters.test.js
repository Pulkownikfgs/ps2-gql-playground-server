import {mapCharacters} from '../characters';

const data = {
  character_list: [
    {
      character_id: '1',
      name: {
        first: 'test 1',
      },
    },
    {
      character_id: '2',
      name: {
        first: 'test 2',
      },
    },
  ],
};

const expected = [
  {
    id: '1',
    name: 'test 1',
  },
  {
    id: '2',
    name: 'test 2',
  },
];

describe('census-api.response.characters.mapCharacters', () => {
  it('Should map characters from raw data', () => {
    expect(mapCharacters(data)).toEqual(expected);
  });
});
