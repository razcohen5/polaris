import {ExampleEntity} from "../../../dal/entities/ExampleEntity";
import {
    getConnectionManager,
    PolarisGraphQLContext,
    PolarisFindOneOptions
} from "@enigmatis/polaris-core";

export const entityByExampleField = async (parent: any, {exampleFieldToFindBy}: any, context: PolarisGraphQLContext): Promise<ExampleEntity | undefined> => {
    return getConnectionManager().get().getRepository(ExampleEntity).findOne(new PolarisFindOneOptions({where: {exampleField: exampleFieldToFindBy}}, context) as any);
};
