import {CommonModel, OneToMany, PrimaryGeneratedColumn, Column, Entity} from "@enigmatis/polaris-core";
import {Book} from "./Book";
import {Gender} from "../enums/Gender";

@Entity()
export class Author extends CommonModel {

    constructor(firstName: string, lastName: string, yearsOnEarth: number, amountOfAwards: number, gender: Gender, books: Book[]) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearsOnEarth = yearsOnEarth;
        this.amountOfAwards = amountOfAwards;
        this.gender = gender;
        this.books = books;
    }

    @PrimaryGeneratedColumn("uuid")
    public id!: string;

    @Column()
    public firstName?: string;

    @Column()
    public lastName?: string;

    @Column()
    public yearsOnEarth?: number;

    @Column()
    public amountOfAwards?: number;

    @Column({
        type: "enum",
        enum: Gender
    })
    public gender?: Gender

    @OneToMany(() => Book, (book) => book.author)
    public books!: Book[];

    getId(): string {
        return this.id;
    }
}
