import {getPolarisConnectionManager, Like, PolarisGraphQLContext} from "@enigmatis/polaris-core";
import {Book} from "../../../dal/entities/Book";

export const booksWhichNameContains = async (parent: any, args: { containedString: string }, context: PolarisGraphQLContext): Promise<Book[]> => {
    return getPolarisConnectionManager().get().getRepository(Book).find(context,
        {where: {name: Like('%' + args.containedString + '%')}})
}
