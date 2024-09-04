"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var faker_1 = require("@faker-js/faker");
var Post = /** @class */ (function () {
    function Post(userName, avatarUrl, imageUrl, description) {
        this._id = (0, uuid_1.v4)();
        this._isLiked = false;
        this._numberOfLikes = 0;
        this._userName = userName;
        this._avatarUrl = avatarUrl;
        this._imageUrl = imageUrl;
        this._description = description;
    }
    Post.prototype.like = function () {
        this._isLiked = !this._isLiked;
        this._numberOfLikes += this._isLiked ? 1 : -1;
        this.updateLikes();
    };
    Post.prototype.updateLikes = function () {
        var postElement = document.querySelector(".post-container[data-id=\"".concat(this._id, "\"]"));
        if (postElement) {
            var likeSpan = postElement.querySelector(".post-likes span");
            if (likeSpan) {
                likeSpan.textContent = "".concat(this._numberOfLikes, " likes");
            }
            var likeIcon = postElement.querySelector(".post-icons .fa-heart");
            if (likeIcon) {
                likeIcon.classList.toggle("liked", this._isLiked);
            }
        }
    };
    Post.prototype.render = function () {
        var post = document.createElement("div");
        post.classList.add("post-container");
        post.innerHTML = "\n      <div class=\"post-header\">\n        <div class=\"left\">\n          <img src=\"".concat(this._avatarUrl, "\" width=\"30\" height=\"30\" alt=\"imagem avatar\" class=\"avatar\" />\n          <span class=\"user-name\">").concat(this._userName, "</span>\n        </div>\n        <div class=\"right\">\n          <span>Follow </span>\n          <button class=\"more-options\">...</button>\n        </div>\n      </div>\n      <div class=\"post-img\">\n        <img src=\"").concat(this._imageUrl, "\" />\n      </div>\n      <div class=\"post-icons\">\n        <div>\n          <div class=\"btn like-btn\">\n            <i class=\"fa-regular fa-heart\"></i>\n          </div>\n          <div class=\"btn\">\n            <i class=\"fa-regular fa-comment\"></i>\n          </div>\n          <div class=\"btn\">\n            <i class=\"fa-regular fa-paper-plane\"></i>\n          </div>\n        </div>\n        <div class=\"btn\">\n          <i class=\"fa-regular fa-bookmark\"></i>\n        </div>\n      </div>\n      <div class=\"post-likes\">\n        <i class=\"fa-solid fa-heart\"></i>\n        <span>").concat(this._numberOfLikes, " likes</span>\n      </div>\n      <div class=\"post-title\">\n        <span>").concat(this._description, "</span>\n      </div>\n    ");
        document.body.appendChild(post);
        console.log("rendering");
    };
    return Post;
}());
for (var index = 0; index < 15; index++) {
    var post = new Post(faker_1.faker.person.firstName(), faker_1.faker.image.avatar(), faker_1.faker.image.url(), faker_1.faker.lorem.sentence());
    post.render();
}
