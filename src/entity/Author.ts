import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Book } from "./Book";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255,
    })
    name: string;

    @Column("date")
    birthday: Date;

    @Column("text")
    bio: string;

    @Column("date")
    createdAt: Date;

    @Column("date")
    updatedAt: Date;

    @OneToMany(() => Book, (book) => book.author)
    books: Book[]
}
