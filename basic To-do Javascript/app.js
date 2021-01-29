"use strict";

let addbutton = document.getElementById("submit");
let box = document.getElementById("box");

let inputField = document.getElementById("input");

addbutton.addEventListener("click", function () {
  let paragraph = document.createElement("li");
  paragraph.innerText = inputField.value;
  box.appendChild(paragraph);
  inputField.value = ``;

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecorationLine = "line-through";
    paragraph.addEventListener("dblclick", function () {
      box.removeChild(paragraph);
    });
  });
});
