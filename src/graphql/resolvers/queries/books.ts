import {getPolarisConnectionManager, PolarisGraphQLContext} from "@enigmatis/polaris-core";
import {Book} from "../../../dal/entities/Book";

export const books = async (parent: any, args: any, context: PolarisGraphQLContext): Promise<Book[]> => {
    return getPolarisConnectionManager().get().getRepository(Book).find(context);
}
