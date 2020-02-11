import * as loggerConfiguration from "../../resources/logger-configuration.json";
import {PolarisGraphQLLogger} from "@enigmatis/polaris-core";
import {applicationProperties} from "../main";

export const logger = new PolarisGraphQLLogger(loggerConfiguration, applicationProperties);
