import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { WardUserEntity } from 'src/ward-user/ward-user.entity';

@Entity({ name: "user" })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 254, unique: true })
    mail: string;

    @Column({ type: "varchar", length: 50 })
    password: string;

    @OneToMany(() => WardUserEntity, wardUserEntity => wardUserEntity.user,{ onUpdate: "CASCADE" })
    public wards!: WardUserEntity[];


}