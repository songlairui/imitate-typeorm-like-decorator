import "reflect-metadata";
import { createConnection } from "typeorm";
import { PostFragment } from "./entity/Post_wrapped.entity";
import { Post } from "./entity/Post.entity";

export async function main() {
  console.info("\n\nPostFragment", PostFragment);
  console.info("\n\nPost", Post);

  createConnection().then(
    async connection => {
      const postRepository = connection.getRepository(Post);

      postRepository
        .findAndCount()
        .then(queryResult => console.log("Query Result ", queryResult))
        .catch(error => console.log("Cannot query. Error: ", error));
    },
    error => console.log("Cannot connect: ", error)
  );
}
