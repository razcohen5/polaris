import {getPolarisConnectionManager, PolarisGraphQLContext} from "@enigmatis/polaris-core";
import {Book} from "../../../dal/entities/Book";
import {Genre} from "../../../dal/enums/Genre";

export const createBook = async (parent: any, args: { title: string, genre: Genre, pageCount: number }, context: PolarisGraphQLContext): Promise<Book[] | Book> => {
    return getPolarisConnectionManager().get().getRepository(Book).save(context,
        new Book(args.title, (args.pageCount + 2) , args.genre));
}
