// @ts-ignore
import {Book} from "../../../dal/entities/Book";

// @ts-ignore
export const Book = {
    pageCount: (bookDB: Book) => {
        return bookDB.pageCountWithCover - 2;
    }
}
