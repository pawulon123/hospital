import { PatientEntity as Patient } from './../patient/patient.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "stay" })
export class StayEntity {
    @PrimaryGeneratedColumn()
    id: number;
   
    @Column({ type: "date" })
    start: Date;

    @Column({ type: "date" })
    end: Date;
    
    @Column({ type: "varchar",  length: 500, nullable: true })
    epicrisis: string;
    
    @Column({ type: "varchar", length: 20, nullable: true })
    icd10: number;
    
    @ManyToOne(() => Patient, patient => patient.stays)
    patient: Patient;

}
