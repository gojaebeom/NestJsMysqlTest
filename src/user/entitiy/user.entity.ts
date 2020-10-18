import { timeStamp } from 'console';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length:50})
  account : string;

  @Column({ length: 256, nullable: false })
  password: string;

  @Column({ length: 20 })
  name: string;
  
  @Column({ length :100 })
  uuid : string;

  @Column({ length: 100 })
  email: string;

  @Column({length:20})
  phone : string;

  @CreateDateColumn()
  createdAt : Date = new Date();

  @UpdateDateColumn()
  updatedAt : Date = new Date();

}