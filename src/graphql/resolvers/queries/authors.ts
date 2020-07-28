import {getPolarisConnectionManager, PolarisGraphQLContext} from "@enigmatis/polaris-core";
import {Author} from "../../../dal/entities/Author";

export const authors = async (parent: any, args: any, context: PolarisGraphQLContext): Promise<Author[]> => {
    return getPolarisConnectionManager().get().getRepository(Author).find(context,
        {relations: ["books"]});
};
