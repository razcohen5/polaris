// @ts-ignore
import {Author} from "../../../dal/entities/Author";

// @ts-ignore
export const Author = {
    name: (authorDB: Author) => `${authorDB.firstName} ${authorDB.lastName}`,
    age: (authorDB: Author) => `${authorDB.yearsOnEarth}`
};
