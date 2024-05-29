import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Author } from "./Author";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255,
    })
    title: string;

    @Column("date")
    releaseDate: Date;

    @Column("text")
    description: string;

    @Column()
    pages: number;

    @Column("date")
    createdAt: Date;

    @Column("date")
    updatedAt: Date;

    @ManyToOne(() => Author, (author) => author.books)
    author: Author
}
