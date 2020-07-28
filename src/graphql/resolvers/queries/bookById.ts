import {getPolarisConnectionManager, PolarisGraphQLContext, UserInputError} from "@enigmatis/polaris-core";
import {Book} from "../../../dal/entities/Book";

export const bookById = async (parent: any, args: { id: string }, context: PolarisGraphQLContext): Promise<Book | undefined> => {
    let book: Book | undefined = await getPolarisConnectionManager().get().getRepository(Book).findOne(context, {where: {id: args.id}});
    if (!book) {
        throw new UserInputError("Could not find a book with the specified id")
    }
    return book;
}
