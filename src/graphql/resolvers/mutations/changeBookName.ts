import {getPolarisConnectionManager, PolarisGraphQLContext} from "@enigmatis/polaris-core";
import {Book} from "../../../dal/entities/Book";

export const changeBookName = async (parent: any, args: { id: string, newName: string }, context: PolarisGraphQLContext): Promise<boolean> => {
    let bookRepository = getPolarisConnectionManager().get().getRepository(Book)
    let book: Book | undefined = await bookRepository.findOne(context, {where: {id: args.id}})
    if (book) {
        book.name = args.newName;
        await bookRepository.update(context,args.id,{name: book.name})
        return true;
    }
    return false;
}
