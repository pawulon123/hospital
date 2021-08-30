import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user" })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: 'varchar',length: 254, unique: true })
    mail: string;
        
    @Column({type: "varchar", length: 50 })
    password: string;
    
}