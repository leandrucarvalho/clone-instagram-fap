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
    const btnLike = document.querySelector(".fa-heart");
    if (isLiked) {
        btnLike === null || btnLike === void 0 ? void 0 : btnLike.classList.remove("fa-solid", "liked");
        btnLike === null || btnLike === void 0 ? void 0 : btnLike.classList.add("fa-regular");
        isLiked = false;
        console.log("not liked");
    }
    else {
        btnLike === null || btnLike === void 0 ? void 0 : btnLike.classList.remove("fa-regular");
        btnLike === null || btnLike === void 0 ? void 0 : btnLike.classList.add("fa-solid", "liked");
        isLiked = true;
        console.log("liked");
    }
}
