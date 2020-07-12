import {PolarisServer, ApplicationProperties, LoggerConfiguration} from '@enigmatis/polaris-core';
import {typeDefs} from './graphql/schema/type-defs';
import {resolvers} from './graphql/resolvers/resolvers';
import * as polarisProperties from '../resources/polaris-properties.json';
import {loggerConfiguration} from "./utils/logger";
import {initConnection} from "./dal/create-connection";
import {initializeDatabase} from "./dal/init-db";

export const applicationProperties: ApplicationProperties = {
    ...polarisProperties,
    environment: process.env.ENVIRONMENT
};

const server = new PolarisServer({
    typeDefs,
    resolvers,
    port: polarisProperties.port,
    applicationProperties,
    logger: loggerConfiguration as LoggerConfiguration
});

let startApp = async () => {
    await initConnection();
    await initializeDatabase();
    await server.start();
};

startApp().catch(async e => {
    if (server) {
        await server.stop();
    }
    console.log(e);
    process.exit(0);
});
