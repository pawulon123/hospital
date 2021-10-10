import { Gender} from './sex'
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    // @Column({ type: "varchar", length: 20, nullable: true })
    // startDate: string;

    // @Column({ type: "varchar", length: 20, nullable: true })
    // endtDate: string;

}
