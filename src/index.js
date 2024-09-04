"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var faker_1 = require("@faker-js/faker");
var Post = /** @class */ (function () {
    function Post(userName, avatarUrl, imageUrl, description) {
        this._id = (0, uuid_1.v4)();
        this._isLiked = false;
        this._numberOfLikes = 0;
        this._createdAt = new Date();
        this._userName = userName;
        this._avatarUrl = avatarUrl;
        this._imageUrl = imageUrl;
        this._description = description;
    }
    Post.prototype.like = function () {
        this._isLiked = !this._isLiked;
        if (this._isLiked === true) {
            this._numberOfLikes += 1;
        }
        else {
            this._numberOfLikes -= 1;
        }
        console.log(this._numberOfLikes);
    };
    return Post;
}());
var posts = [];
for (var index = 0; index < 15; index++) {
    var post = new Post(faker_1.faker.person.firstName(), faker_1.faker.image.avatarGitHub(), faker_1.faker.image.urlPicsumPhotos(), faker_1.faker.lorem.paragraph());
    posts.push(post);
}
console.log("Testando");
