import {Author} from "./Author";
import {CommonModel, PrimaryGeneratedColumn, ManyToOne, Column, Entity} from "@enigmatis/polaris-core";
import {Genre} from "../enums/Genre";

@Entity()
export class Book extends CommonModel{

    constructor(name: string, pageCountWithCover: number, genre: Genre) {
        super();
        this.name = name;
        this.pageCountWithCover = pageCountWithCover;
        this.genre = genre;
    }

    @PrimaryGeneratedColumn("uuid")
    public id!: string

    @Column()
    public name?: string;

    @Column()
    public pageCountWithCover: number;

    @Column()
    public genre?: Genre;

    @ManyToOne(()=>Author, (author)=>author.books)
    public author?: Author;

    getId(): string {
        return this.id;
    }
}
