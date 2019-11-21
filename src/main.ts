import {PolarisServer} from '@enigmatis/polaris-core';
import {typeDefs} from './schema/type-defs';
import {resolvers} from './schema/resolvers';
import * as polarisProperties from '../polaris-properties.json';

const server = new PolarisServer({
    typeDefs,
    resolvers,
    port: polarisProperties.port,
    applicationLogProperties: {
        id: polarisProperties.id,
        name: polarisProperties.name,
        version: polarisProperties.version,
        environment: polarisProperties.environment,
        component: polarisProperties.component,
    }
});

server.start();
