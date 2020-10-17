import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  
  @PrimaryGeneratedColumn()
  private id: number;

  @Column({ length:40, nullable : false})
  private account : string;

  @Column({ length: 256, nullable: false })
  private password: string;

  @Column({ length: 40 })
  private name: string;

  @Column({ length: 12 })
  private phone: string;

  @Column({ length: 40 })
  private email: string;

  @Column()
  private createdAt : Date;

  @Column()
  private updatedAt : Date;
}