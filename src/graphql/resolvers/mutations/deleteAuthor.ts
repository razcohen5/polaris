import {getPolarisConnectionManager, PolarisGraphQLContext} from "@enigmatis/polaris-core";
import {Author} from "../../../dal/entities/Author";

export const deleteAuthor = async (parent: any, args: { id: string }, context: PolarisGraphQLContext): Promise<boolean> => {
    let authorRepository = getPolarisConnectionManager().get().getRepository(Author)
    let author: Author | undefined = await authorRepository.findOne(context, {where: {id: args.id}})
    if (author) {
        await authorRepository.delete(context, args.id);
        return true
    }
    return false
}
