import { faker } from "@faker-js/faker";

window.onload = () => {
  const element = document.querySelector(".user-name");
  if (element) {
    element.innerHTML = faker.person.firstName();
    console.log(element + " foi alterado");
  } else {
    console.error("Erro ao obter elemento");
  }
};
