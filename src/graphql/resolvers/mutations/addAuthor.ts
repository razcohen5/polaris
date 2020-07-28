import {Author} from "../../../dal/entities/Author";
import {getPolarisConnectionManager, PolarisGraphQLContext} from "@enigmatis/polaris-core";
import {Gender} from "../../../dal/enums/Gender";

export const addAuthor = async (parent: any, args: {
                                    firstName: string,
                                    lastName: string,
                                    age: number,
                                    gender: Gender,
                                    numberOfAwards: number
                                }
    , context: PolarisGraphQLContext): Promise<Author[] | Author> => {
    return getPolarisConnectionManager().get().getRepository(Author).save(context,
        new Author(args.firstName, args.lastName, args.age, args.numberOfAwards, args.gender, []));
}
