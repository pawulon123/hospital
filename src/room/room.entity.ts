import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { WardEntity as Ward } from "../ward/ward.entity";
import { BedEntity as Bed } from "../bed/bed.entity";
@Entity({ name: "room" })
export class RoomEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: "varchar", length: 20 , nullable: true})
    name: string;
    
    @Column({type: "varchar", length: 20, nullable: true })
    type: string;
    
    @Column({ type: "varchar",length: 100, nullable: true })
    polygon: string;
    
    @ManyToOne(() => Ward, ward => ward.rooms)
    ward: Ward;

    @OneToMany(() => Bed, bed => bed.room)
    beds: Bed[];
}