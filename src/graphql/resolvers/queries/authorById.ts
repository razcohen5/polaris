import {Author} from "../../../dal/entities/Author";
import {getPolarisConnectionManager, PolarisGraphQLContext} from "@enigmatis/polaris-core";

export const authorById = async (parent: any, args: { id: string }, context: PolarisGraphQLContext): Promise<Author | undefined> => {
    return getPolarisConnectionManager().get().getRepository(Author).findOne(context, {where: {id: args.id}})
}
