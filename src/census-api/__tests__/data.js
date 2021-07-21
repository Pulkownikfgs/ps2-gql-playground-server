export const charactersData = {
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

export const charactersResult = [
  {
    id: '1',
    name: 'test 1',
  },
  {
    id: '2',
    name: 'test 2',
  },
];

export const charactersEndpoint =
  'https://mock.api/character?name.first_lower=*test&c:limit=10';
