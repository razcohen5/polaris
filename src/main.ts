import {
    ApplicationProperties,
    DataVersionMiddleware,
    getPolarisConnectionManager,
    IrrelevantEntitiesMiddleware,
    LoggerConfiguration,
    PolarisServer,
    RealitiesHolder
} from '@enigmatis/polaris-core';
import {typeDefs} from './graphql/schema/type-defs';
import {resolvers} from './graphql/resolvers/resolvers';
import * as polarisProperties from '../resources/polaris-properties.json';
import {logger, loggerConfiguration} from "./utils/logger";
import {initConnection} from "./dal/create-connection";
import {initializeDatabase} from "./dal/init-db";

export const applicationProperties: ApplicationProperties = {
    ...polarisProperties,
    environment: process.env.ENVIRONMENT
};

export const realitiesHolder = new RealitiesHolder(
    new Map([
        [1, {id: 1, type: 'dril1', name: 'default'}],
        [2, {id: 2, type: 'dril2', name: 'default'}],
        [3, {id: 3, type: 'simulativedril', name: 'default'}]
    ]),
);

const server = new PolarisServer(({
    typeDefs,
    resolvers,
    port: polarisProperties.port,
    applicationProperties,
    logger: loggerConfiguration as LoggerConfiguration,
    middlewareConfiguration: {
        allowDataVersionAndIrrelevantEntitiesMiddleware: true,
        allowSoftDeleteMiddleware: true,
        allowRealityMiddleware: true,
        allowTransactionalMutations: true
    },
    supportedRealities: realitiesHolder,
    customMiddlewares:
        [new DataVersionMiddleware(logger, realitiesHolder, getPolarisConnectionManager()).getMiddleware(),
            new IrrelevantEntitiesMiddleware(logger, realitiesHolder, getPolarisConnectionManager()).getMiddleware()]
}));

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
