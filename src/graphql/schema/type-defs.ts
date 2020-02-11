export const typeDefs = `
    type Query {
        allExampleEntities: [ExampleEntity!]
        entityByExampleField(exampleFieldToFindBy: String!): ExampleEntity
    }
    
    type Mutation {
        saveExampleEntity(exampleField: String!): ExampleEntity!
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
`;
