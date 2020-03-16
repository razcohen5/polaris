import * as loggerConfiguration from "../../resources/logger-configuration.json";
import {PolarisLogger} from "@enigmatis/polaris-core";
import {applicationProperties} from "../main";

export const logger = new PolarisLogger(loggerConfiguration, applicationProperties);
export {loggerConfiguration}
