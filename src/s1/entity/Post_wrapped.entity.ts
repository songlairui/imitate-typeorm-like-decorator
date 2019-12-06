import { Entity, Column, PrimaryColumn, Generated } from "../../desc";

@Entity("sample01_post_fragment")
export class PostFragment {
  @PrimaryColumn("integer")
  @Generated()
  id: number;

  @Column()
  title: string;
}
