import {getPolarisConnectionManager, PolarisGraphQLContext} from "@enigmatis/polaris-core";
import {Book} from "../../../dal/entities/Book";

export const booksByAuthorId = async (parent: any, args: { authorId: string }, context: PolarisGraphQLContext): Promise<Book[]> => {
    return getPolarisConnectionManager().get().getRepository(Book).find(context, {where: {author: args.authorId}});
}
