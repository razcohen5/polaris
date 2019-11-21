const allBooks = [
    {title: 'Book1', realityId: 0, deleted: false, dataVersion: 2},
    {title: 'Book2', realityId: 0, deleted: false, dataVersion: 3},
    {title: 'Book3', realityId: 0, deleted: false, dataVersion: 3},
    {title: 'Book4', realityId: 1, deleted: false, dataVersion: 4},
];

export const resolvers = {
    Query: {
        allBooks: () => allBooks,
        bookByTitle: (parent: any, args: any) => {
            console.log(args);
            return allBooks.filter(book => book.title === args.title);
        },
    },
};
