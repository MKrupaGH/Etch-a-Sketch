//creating container with divs

const container = document.querySelector(".container");

let isDown = false;

function createDivs() {
  for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement("div");
    cell.classList.add(".cell");
    cell.style.border = "1px solid black";
    container.appendChild(cell);

    cell.addEventListener("mouseover", () => {
      if (isDown===true) {
        cell.style.backgroundColor = "red";
      }
    });
  }
}
createDivs();

document.addEventListener("mousedown", () => {
  isDown = true;
});
document.addEventListener("mouseup", () => {
  isDown = false;
});

console.log(isDown);


