import { text } from "express";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Board{
    @PrimaryGeneratedColumn()
    id : number;

    @Column({name:"writer_id"})
    writerId : number;

    @Column({length:50})
    title : string;

    @Column({type:"text"})
    content : string;

    @CreateDateColumn({
        name:"created_at"
    })
    createdAt : Date;

    @UpdateDateColumn({
        name:"updated_at"
    })
    updatedAt : Date;
}