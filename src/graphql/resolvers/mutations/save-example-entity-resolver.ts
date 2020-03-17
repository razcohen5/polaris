import {getPolarisConnectionManager, PolarisGraphQLContext} from "@enigmatis/polaris-core";
import {ExampleEntity} from "../../../dal/entities/ExampleEntity";

export const saveExampleEntity = async (parent: any, args: { exampleField: string }, context: PolarisGraphQLContext): Promise<ExampleEntity[] | ExampleEntity> => {
    const newExampleEntity: ExampleEntity = new ExampleEntity(args.exampleField);
    return getPolarisConnectionManager().get().getRepository(ExampleEntity).save(context, newExampleEntity);
};
