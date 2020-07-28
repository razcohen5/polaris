import {allExampleEntities} from "./queries/all-example-entities";
import {entityByExampleField} from "./queries/entity-by-example-field";
import {saveExampleEntity} from "./mutations/save-example-entity-resolver";
import {authorById} from "./queries/authorById";
import {authors} from "./queries/authors";
import {bookById} from "./queries/bookById";
import {books} from "./queries/books";
import {booksByAuthorId} from "./queries/booksByAuthorId";
import {booksWhichNameContains} from "./queries/booksWhichNameContains";
import {addAuthor} from "./mutations/addAuthor";
import {addBookToAuthor} from "./mutations/addBookToAuthor";
import {changeBookName} from "./mutations/changeBookName";
import {createBook} from "./mutations/createBook";
import {Author} from "./author/authorResolver";
import { Book } from "./book/bookResolver";
import {deleteAuthor} from "./mutations/deleteAuthor";

export const resolvers = {
    Query: {
        allExampleEntities,
        entityByExampleField,
        authorById,
        authors,
        bookById,
        books,
        booksByAuthorId,
        booksWhichNameContains
    },
    Mutation: {
        saveExampleEntity,
        addAuthor,
        addBookToAuthor,
        changeBookName,
        createBook,
        deleteAuthor
    },
    Author,
    Book
};
