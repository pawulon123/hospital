import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "ward" })
export class WardEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar',length: 100})
    name: string;
}
