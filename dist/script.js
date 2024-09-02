"use strict";
/* import { faker } from "@faker-js/faker";

window.onload = () => {
  const element = document.querySelector(".user-name");
  if (element) {
    element.innerHTML = faker.person.firstName();
    console.log(element + " foi alterado");
  } else {
    console.error("Erro ao obter elemento");
  }
};
 */
let isLiked = false;
function likePost() {
    const btnLike = document.querySelector(".fa-regular.fa-heart");
    if (isLiked) {
        btnLike === null || btnLike === void 0 ? void 0 : btnLike.classList.remove("fa-regular", "fa-heart");
        btnLike === null || btnLike === void 0 ? void 0 : btnLike.classList.add("fa-solid", "fa-heart");
        btnLike === null || btnLike === void 0 ? void 0 : btnLike.classList.add("liked");
        isLiked = false;
        console.log("liked");
    }
    else {
        btnLike === null || btnLike === void 0 ? void 0 : btnLike.classList.remove("fa-solid", "fa-heart");
        btnLike === null || btnLike === void 0 ? void 0 : btnLike.classList.remove("liked");
        btnLike === null || btnLike === void 0 ? void 0 : btnLike.classList.add("fa-regular", "fa-heart");
        isLiked = true;
        console.log("not liked");
    }
}
