import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { RoomEntity as Room } from "../room/room.entity";
import { PatientEntity as Patient } from "../patient/patient.entity";
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

    @Column({ type: "varchar",length: 100, nullable: true })
    polygon: string;

    @ManyToOne(() => Room, room => room.beds)
    room: Room;

    @OneToOne(() => Patient, patient => patient.bed) 
    @JoinColumn()
    patient: Patient;
}
