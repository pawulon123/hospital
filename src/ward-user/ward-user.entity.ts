import { UserEntity as User } from './../user/user.entity';
import { WardEntity as Ward } from './../ward/ward.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "ward-user" })
export class WardUserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    public wardId!: number;

    @Column()
    public userId!: number;
    
    @ManyToOne(() => User, user => user.wards,{onDelete: "CASCADE" })
    public user! : User;
    
    @ManyToOne(() => Ward, ward => ward.users, {onDelete: "CASCADE" })
    public ward! : Ward;

}