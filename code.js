//creating container with divs

const container = document.querySelector(".container");
const color = document.querySelector(".rgb");
const reset = document.querySelector("button");
const gridSizeInput = document.querySelector(".gridSize");

let isDown = false;
let size = 16;
gridSizeInput.addEventListener("change", () => {
  size = gridSizeInput.value;
  container.innerHTML = "";
  createDivs(size);
});

function createDivs(gridSize) {
  for (let i = 0; i < gridSize ** 2; i++) {
    const cell = document.createElement("div");
    cell.classList.add(".cell");
    cell.style.border = "1px solid black";
    container.appendChild(cell);
    console.log(gridSize);
    container.setAttribute(
      "style",
      "grid-template: repeat(" +
        gridSize +
        ",auto)/repeat(" +
        gridSize +
        ",auto)"
    );

    cell.addEventListener("mouseover", () => {
      if (isDown === true) {
        cell.style.backgroundColor = color.value;
      }
    });

    reset.addEventListener("click", () => {
      cell.style.backgroundColor = "#fff";
    });
  }
}

document.addEventListener("mousedown", () => {
  isDown = true;
});
document.addEventListener("mouseup", () => {
  isDown = false;
});

window.onload = createDivs(size);
