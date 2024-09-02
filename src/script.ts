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
    btnLike?.classList.remove("fa-regular", "fa-heart");
    btnLike?.classList.add("fa-solid", "fa-heart");
    btnLike?.classList.add("liked");
    isLiked = false;
    console.log("liked");
  } else {
    btnLike?.classList.remove("fa-solid", "fa-heart");
    btnLike?.classList.remove("liked");
    btnLike?.classList.add("fa-regular", "fa-heart");
    isLiked = true;
    console.log("not liked");
  }
}
