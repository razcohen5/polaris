import {ExampleEntity} from "../../../dal/entities/ExampleEntity";
import {getConnectionManager, PolarisFindManyOptions, PolarisGraphQLContext} from "@enigmatis/polaris-core";

export const allExampleEntities = async (parent: any, args: any, context: PolarisGraphQLContext): Promise<ExampleEntity[]> => {
    return getConnectionManager().get().getRepository(ExampleEntity).find(new PolarisFindManyOptions({}, context) as any);
};
