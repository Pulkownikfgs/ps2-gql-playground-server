export const resolvers = {
  Query: {
    characters: () => {
      console.log('characters resolver');

      return [
        {
          id: '1',
          name: 'test',
        },
      ];
    },
  },
};
