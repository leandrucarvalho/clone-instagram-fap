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
  isLiked = !isLiked;

  const btnLike = document.querySelector(".fa-heart");

  if (isLiked) {
    btnLike?.classList.remove("fa-solid", "liked");
    btnLike?.classList.add("fa-regular");
    isLiked = false;
    console.log("not liked");
  } else {
    btnLike?.classList.remove("fa-regular");
    btnLike?.classList.add("fa-solid", "liked");
    isLiked = true;
    console.log("liked");
  }
}

let isBookmarked = false;
function bookmark() {
  let btnBookmark = document.querySelector(".fa-bookmark");

  if (isBookmarked) {
    btnBookmark?.classList.remove("fa-solid");
    btnBookmark?.classList.add("fa-regular");
    isBookmarked = false;
    console.log("not bookmarked");
  } else {
    btnBookmark?.classList.remove("fa-regular");
    btnBookmark?.classList.add("fa-solid");
    isBookmarked = true;
    console.log("bookmarked");
  }
}
