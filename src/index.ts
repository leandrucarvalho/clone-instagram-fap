/* import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

class Post {
  private _id: string;
  private _userName: string;
  private _imageUrl: string;
  private _postDescription: string;
  private _numLikes: number;

  constructor(userName: string, imageUrl: string, postDescription: string) {
    this._id = uuidv4();
    this._userName = userName;
    this._imageUrl = imageUrl;
    this._postDescription = postDescription;
    this._numLikes = 0;
  }

  get id() {
    return this._id;
  }

  get userName() {
    return this._userName;
  }

  get imageUrl() {
    return this._imageUrl;
  }

  get postDescription() {
    return this._postDescription;
  }

  set postDescription(postDescription: string) {
    this._postDescription = postDescription;
  }

  get numLikes() {
    return this._numLikes;
  }

  incrementLikes() {
    this._numLikes += 1;
  }
}

const posts: Post[] = [];

for (let i = 0; i < 15; i++) {
  const post = new Post(
    faker.person.firstName(),
    faker.image.url(),
    faker.lorem.lines(1)
  );
  post.incrementLikes();
  posts.push(post);
}

console.log(posts);
 */
