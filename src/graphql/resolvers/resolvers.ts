import {allExampleEntities} from "./queries/all-example-entities";
import {entityByExampleField} from "./queries/entity-by-example-field";
import {saveExampleEntity} from "./mutations/save-example-entity-resolver";

export const resolvers = {
    Query: {
        allExampleEntities,
        entityByExampleField
    },
    Mutation: {
        saveExampleEntity
    }
};
