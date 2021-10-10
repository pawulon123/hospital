import { Gender} from './sex'
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BedEntity as Bed } from "../bed/bed.entity";

@Entity({ name: "patient" })
export class PatientEntity {

    @PrimaryGeneratedColumn()
    id: number;
   
    @Column({ type: "varchar", length: 100, nullable: true })
    name: string;
    
    @Column({ type: "varchar", length: 100, nullable: true })
    sureName: string;
    
    @Column({ type: "char", length:11, nullable: true })
    pesel: string;
    
    @Column({ type: "varchar", length: 500, nullable: true })
    description: string;

    @Column({type: "enum", enum: Gender })
    sex: Gender;

    @Column({ default: false })
    walking: boolean ;

    @OneToOne(() => Bed, bed => bed.patient) // specify inverse side as a second parameter
    bed: Bed;
}
