import { Entity, PrimaryColumn, Generated, Column } from "typeorm";

@Entity("sample01_post")
export class Post {
  @PrimaryColumn("integer")
  @Generated()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column({ nullable: false })
  likesCount: number;
}
