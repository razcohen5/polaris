import {ExampleEntity} from "../../../dal/entities/ExampleEntity";
import {
    getPolarisConnectionManager,
    PolarisGraphQLContext,
} from "@enigmatis/polaris-core";

export const entityByExampleField = async (parent: any, {exampleFieldToFindBy}: any, context: PolarisGraphQLContext): Promise<ExampleEntity | undefined> => {
    return getPolarisConnectionManager().get().getRepository(ExampleEntity).findOne(context, {where: {exampleField: exampleFieldToFindBy}});
};
