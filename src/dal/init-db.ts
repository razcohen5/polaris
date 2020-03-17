import {getPolarisConnectionManager} from "@enigmatis/polaris-core";
import {ExampleEntity} from "./entities/ExampleEntity";

export const entities: ExampleEntity[] = [
  new ExampleEntity('Test1'),
  new ExampleEntity('Test2'),
  new ExampleEntity('Test3'),
  new ExampleEntity('Test4'),
];

export const initalizeDatabase = async () => {
    await getPolarisConnectionManager().get().getRepository(ExampleEntity).save({} as any, entities);
};
