import {getPolarisConnectionManager} from "@enigmatis/polaris-core";
import {ExampleEntity} from "./entities/ExampleEntity";
import {Book} from "./entities/Book";
import {Genre} from "./enums/Genre";
import {Author} from "./entities/Author";
import {Gender} from "./enums/Gender";

export const entities: ExampleEntity[] = [
    new ExampleEntity('Test1'),
    new ExampleEntity('Test2'),
    new ExampleEntity('Test3'),
    new ExampleEntity('Test4'),
];

function getInitialBooks(): Book[] {
    return [
        new Book("Harry potter", 120, Genre.FICTION),
        new Book("Game of thrones", 5000, Genre.ADVENTURE)
    ]
}

function getInitialAuthors(books: Book[]): Author[] {
    return [
        new Author("r", "c", 22, 9000, Gender.MALE, books),
    ]
}

export const initializeDatabase = async () => {
    const connection = getPolarisConnectionManager().get()
    const books = getInitialBooks();
    const authors = getInitialAuthors(books);

    const exampleEntityRepository = connection.getRepository(ExampleEntity);
    const bookRepository = connection.getRepository(Book);
    const authorRepository = connection.getRepository(Author);

    await exampleEntityRepository.save({} as any, entities);
    await bookRepository.save({} as any, books);
    await authorRepository.save({} as any, authors);
};
