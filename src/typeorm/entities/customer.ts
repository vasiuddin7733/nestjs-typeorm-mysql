import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Customer {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean
}