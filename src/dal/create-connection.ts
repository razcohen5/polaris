import {createPolarisConnection, ConnectionOptions} from "@enigmatis/polaris-core";
import {logger} from "../utils/logger";

let connectionOptions: ConnectionOptions = {
    type: "postgres",
    url: "postgres://ivmnscwr:ojKegCvYByiop1m-jStz96IlKPV7XCju@balarama.db.elephantsql.com:5432/ivmnscwr",
    entities: [__dirname + '/entities/*.{ts,js}'],
    synchronize: true,
    logging: true,
    schema: "myschema",
    dropSchema: true
};

export const initConnection = async () =>{
    await createPolarisConnection(connectionOptions, logger);
};
