export const typeDefs = `
    type Query {
        allExampleEntities: [ExampleEntity!]
        entityByExampleField(exampleFieldToFindBy: String!): ExampleEntity
        authors: [Author!]
        authorById(id: String!): Author
        books: [Book!]
        bookById(id: String!): Book
        booksByAuthorId(authorId: String!): [Book!]
        booksWhichNameContains(containedString: String!): [Book!]
    }
    
    type Mutation {
        saveExampleEntity(exampleField: String!): ExampleEntity!
        addAuthor(firstName: String!, lastName: String!, age: Int!, gender: Gender!, numberOfAwards: Int!): Author!
        addBookToAuthor(bookId: String!, authorId: String!): Author
        createBook(title: String!, genre: Genre!, pageCount: Int!): Book!
        changeBookName(id: String!, newName: String!): Boolean
        deleteAuthor(id: String!): Boolean
    }

    type ExampleEntity implements RepositoryEntity {
        id: String!
        deleted: Boolean!
        createdBy: String!
        creationTime: DateTime!
        lastUpdatedBy: String
        lastUpdateTime: DateTime
        realityId: Int!
        exampleField: String
    }
    
    type Author implements RepositoryEntity {
        id: String!
        deleted: Boolean!
        createdBy: String!
        creationTime: DateTime!
        lastUpdatedBy: String
        lastUpdateTime: DateTime
        realityId: Int!
        name: String
        age: Int
        gender: Gender
        amountOfAwards: Int
        books: [Book!]
    }
    
    type Book implements RepositoryEntity {
        id: String!
        deleted: Boolean!
        createdBy: String!
        creationTime: DateTime!
        lastUpdatedBy: String
        lastUpdateTime: DateTime
        realityId: Int!
        name: String
        pageCount: Int
        genre: Genre
        author: Author
    }
    
    enum Genre {
        FICTION
        HORROR
        ADVENTURE
    }
    
    enum Gender {
        MALE
        FEMALE
    }
`;
