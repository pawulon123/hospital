import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "bed" })
export class BedEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    id_room: number;
    @Column({ type: "int", nullable: true })
    x_svg: number;
    @Column({ type: "int", nullable: true })
    y_svg: number;
    @Column({ type: "int", nullable: true })
    rotate: number;
    @Column({ type: "varchar", length: 20, default:"basic" })
    type: string;
}
