import {PolarisServer, ApplicationProperties} from '@enigmatis/polaris-core';
import {typeDefs} from './graphql/schema/type-defs';
import {resolvers} from './graphql/resolvers/resolvers';
import * as polarisProperties from '../polaris-properties.json';
import {logger} from "./utils/logger";
import {initConnection} from "./dal/create-connection";
import {initalizeDatabase} from "./dal/init-db";

export const applicationProperties: ApplicationProperties = {
    ...polarisProperties,
    environment: process.env.ENVIRONMENT
};

const server = new PolarisServer({
    typeDefs,
    resolvers,
    port: polarisProperties.port,
    applicationProperties,
    logger
});

let startApp = async () => {
    await initConnection();
    await initalizeDatabase();
    await server.start();
};

startApp().catch(async e => {
    if (server) {
        await server.stop();
    }
    console.log(e);
    process.exit(0);
});
