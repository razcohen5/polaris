import {ExampleEntity} from "../../../dal/entities/ExampleEntity";
import {getPolarisConnectionManager, PolarisGraphQLContext} from "@enigmatis/polaris-core";

export const allExampleEntities = async (parent: any, args: any, context: PolarisGraphQLContext): Promise<ExampleEntity[]> => {
    return getPolarisConnectionManager().get().getRepository(ExampleEntity).find(context);
};
