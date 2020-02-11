import {createPolarisConnection, ConnectionOptions} from "@enigmatis/polaris-core";
import {logger} from "../utils/logger";

let connectionOptions: ConnectionOptions = {
    type: "sqlite",
    "database": ":memory:",
    entities: [
        __dirname + '/entities/*.{ts,js}',
    ],
    synchronize: true,
    logging: true
};

export const initConnection = async () =>{
    await createPolarisConnection(connectionOptions, logger);
};
