import { JgpNfzEntity as JgpNfz } from './../jgp-nfz/jgp-nfz.entity';
import { PatientEntity as Patient } from './../patient/patient.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

enum Status {
    COMING  = 'coming',
    CURRENT = 'current',
    PAST = 'past'
  }
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
    icd10: string;

    @Column({type: "enum", enum: Status })
    status: Status;
    
    @ManyToOne(() => Patient, patient => patient.stays)
    patient: Patient;

    @OneToOne(() => JgpNfz, jgpNfz => jgpNfz.stay) 
    @JoinColumn()
    jgpNfz: JgpNfz;
    
}
