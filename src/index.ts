import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

class Post {
  private _id: string = uuidv4();
  private _userName: string;
  private _avatarUrl: string;
  private _imageUrl: string;
  private _description: string;
  private _isLiked: boolean = false;
  private _numberOfLikes: number = 0;

  constructor(
    userName: string,
    avatarUrl: string,
    imageUrl: string,
    description: string
  ) {
    this._userName = userName;
    this._avatarUrl = avatarUrl;
    this._imageUrl = imageUrl;
    this._description = description;
  }

  like() {
    this._isLiked = !this._isLiked;
    this._numberOfLikes += this._isLiked ? 1 : -1;
    this.updateLikes();
  }

  private updateLikes() {
    const postElement = document.querySelector(
      `.post-container[data-id="${this._id}"]`
    );
    if (postElement) {
      const likeSpan = postElement.querySelector(".post-likes span");
      if (likeSpan) {
        likeSpan.textContent = `${this._numberOfLikes} likes`;
        console.log(this._numberOfLikes);
      }
      const likeIcon = postElement.querySelector(".post-icons .fa-heart");
      if (likeIcon) {
        likeIcon.classList.toggle("fa-solid", this._isLiked);
        likeIcon.classList.toggle("fa-regular", !this._isLiked);
        likeIcon.classList.toggle("liked", this._isLiked);
        console.log(this._isLiked);
      }
    }
  }

  render() {
    const post = document.createElement("div");
    post.classList.add("post-container");
    post.setAttribute("data-id", this._id);

    post.innerHTML = `
      <div class="post-header">
        <div class="left">
          <img src="${this._avatarUrl}" width="30" height="30" alt="imagem avatar" class="avatar" />
          <span class="user-name">${this._userName}</span>
        </div>
        <div class="right">
          <button>Follow</button>
          <button class="more-options">...</button>
        </div>
      </div>
      <div class="post-img">
        <img src="${this._imageUrl}" />
      </div>
      <div class="post-icons">
        <div>
          <div class="btn like-btn">
            <i class="fa-regular fa-heart"></i>
          </div>
          <div class="btn">
            <i class="fa-regular fa-comment"></i>
          </div>
          <div class="btn">
            <i class="fa-regular fa-paper-plane"></i>
          </div>
        </div>
        <div class="btn">
          <i class="fa-regular fa-bookmark"></i>
        </div>
      </div>
      <div class="post-likes">
        <i class="fa-solid fa-heart"></i>
        <span>${this._numberOfLikes} likes</span>
      </div>
      <div class="post-title">
        <span>${this._description}</span>
      </div>
    `;

    post
      .querySelector(".like-btn")
      ?.addEventListener("click", () => this.like());

    document.body.appendChild(post);
    console.log("rendering");
  }
}

for (let index = 0; index < 15; index++) {
  const post = new Post(
    faker.person.firstName() || "Anonymous",
    faker.image.avatar() || "default-avatar-url",
    faker.image.url() || "default-image-url",
    faker.lorem.sentence() || "No description available"
  );

  console.log(`Post ${index}`, post);

  post.render();
}
