import {createPolarisConnection, ConnectionOptions} from "@enigmatis/polaris-core";
import {logger} from "../utils/logger";

let connectionOptions: ConnectionOptions = {
    type: "postgres",
    url: process.env.CONNECTION_STRING || '',
    entities: [__dirname + '/entities/*.{ts,js}'],
    synchronize: true,
    logging: true,
    schema: "seed",
    dropSchema: true
};

export const initConnection = async () =>{
    await createPolarisConnection(connectionOptions, logger);
};
