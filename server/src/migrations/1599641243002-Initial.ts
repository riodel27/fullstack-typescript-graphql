import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1599641243002 implements MigrationInterface {
    name = 'Initial1599641243002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organization" ADD "org_name" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organization" DROP COLUMN "org_name"`);
    }

}
