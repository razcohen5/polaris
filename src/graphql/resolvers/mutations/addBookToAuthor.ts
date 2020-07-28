import {getPolarisConnectionManager, PolarisGraphQLContext} from "@enigmatis/polaris-core";
import {Author} from "../../../dal/entities/Author";
import {Book} from "../../../dal/entities/Book";
import {books} from "../queries/books";

export const addBookToAuthor = async (parent: any, args: { bookId: string, authorId: string }, context: PolarisGraphQLContext): Promise<Author[] | Author | undefined> => {
    let connection = getPolarisConnectionManager().get();
    let authorRepository = connection.getRepository(Author);
    let bookRepository = connection.getRepository(Book);
    let author: Author | undefined = await authorRepository.findOne(context, {
        where: {
            id: args.authorId
        },
        relations: ["books"]
    },);
    let book: Book | undefined = await bookRepository.findOne(context, {
        where: {
            id: args.bookId
        }
    });
    if (author && book) {
        author.books.push(book);
        return authorRepository.save(context, author);
    }
    return undefined;
}
