import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { RoomEntity as Room } from "../room/room.entity";
@Entity({ name: "bed" })
export class BedEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
   
    @Column({ type: "int", nullable: true })
    x_svg: number;
    
    @Column({ type: "int", nullable: true })
    y_svg: number;
    
    @Column({ type: "int", nullable: true })
    rotate: number;
    
    @Column({ type: "varchar", length: 20, default: "basic" })
    type: string;

    @ManyToOne(() => Room, room => room.beds)
    room: Room;
}
