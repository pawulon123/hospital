import { StayEntity as Stay } from './../stay/stay.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
@Entity({ name: "jgp-nfz" })
export class JgpNfzEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: "int" })
    price: number;

    @Column({ type: "varchar", length: 20,  })
    short: string;

    @Column({ type: "varchar", length: 200,  })
    fullName: string;

    @OneToOne(() => Stay, stay => stay.jgpNfz) 
    stay: Stay;
}
