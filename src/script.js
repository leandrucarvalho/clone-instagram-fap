"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
window.onload = function () {
    var element = document.querySelector(".user-name");
    if (element) {
        element.innerHTML = faker_1.faker.person.firstName();
        console.log(element + " foi alterado");
    }
    else {
        console.error("Erro ao obter elemento");
    }
};
