import { BaseEntity, Entity, PrimaryGeneratedColumn, Column , OneToMany, OneToOne, JoinColumn } from "typeorm"
import { User } from "./Users";
import { Events } from "./Events";


@Entity("artists")
export class Artists {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    user_id!: number;

    @Column()
    genre?: string;

    @Column()
    music?: string;

    @Column()
    events?: string;

    @Column()
    created_at!: Date

    @Column()
    updated_at!: Date

    @OneToOne(() => User, (user) => user.artists)
    @JoinColumn({name: "user_id"})
    user!: User;

    @OneToMany(() => Event, (event) => event)
    Events!: Events[];


}