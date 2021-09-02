import { UserEntity as User } from './../user/user.entity';
import { WardEntity as Ward } from './../ward/ward.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "ward-user" })
export class WardUserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    public wardId!: number;

    @Column()
    public userId!: number;
    
    @ManyToOne(() => User, user => user.wardUsers)
    public user! : User;
    
    @ManyToOne(() => Ward, ward => ward.wardUsers)
    public ward! : Ward;

}