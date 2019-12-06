import "reflect-metadata";
import { createConnection } from "typeorm";
import { Post } from "./entity/Post.entity";

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
