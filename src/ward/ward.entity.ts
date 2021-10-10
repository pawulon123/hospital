import { RoomEntity as Room } from './../room/room.entity';
import { WardUserEntity } from "src/ward-user/ward-user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "ward" })
export class WardEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @OneToMany(() => WardUserEntity, wardUserEntity => wardUserEntity.ward, { onUpdate: "CASCADE" })
    public users!: WardUserEntity[];

    @OneToMany(() => Room, room => room.ward)
    rooms: Room[];
}

