import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBookTable1716911735528 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE Book (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                releaseDate DATE,
                description TEXT,
                pages INT,
                author_id INT NOT NULL,
                FOREIGN KEY (author_id) REFERENCES Author(id),
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
              )`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE Book DROP FOREIGN KEY FK_Book_Author`);
        await queryRunner.query(`DROP TABLE Book`);
    }

}
