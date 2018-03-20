import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePetTable1512663524808 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const table = new Table('pet', [
            {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isNullable: false,
            }, {
                name: 'name',
                type: 'varchar',
                length: 255,
                isPrimary: false,
                isNullable: false,
            }, {
                name: 'age',
                type: 'int',
                isPrimary: false,
                isNullable: false,
            }, {
                name: 'user_id',
                type: 'int',
                isPrimary: false,
                isNullable: true,
            },
        ]);
        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('pet');
    }

}
