import {getConnectionManager, PolarisSaveOptions, PolarisGraphQLContext} from "@enigmatis/polaris-core";
import {ExampleEntity} from "../../../dal/entities/ExampleEntity";

export const saveExampleEntity = async (parent: any, args : {exampleField : string}, context: PolarisGraphQLContext): Promise<ExampleEntity> =>{
    const newExampleEntity: ExampleEntity = new ExampleEntity(args.exampleField);
    return getConnectionManager().get().getRepository(ExampleEntity).save(new PolarisSaveOptions(newExampleEntity, context) as any);
};
