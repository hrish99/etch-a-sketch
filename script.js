function makeGrid(val) {
  container.style.setProperty("--grid-rows", val);
  container.style.setProperty("--grid-cols", val);
  for (c = 0; c < val * val; c++) {
    let cell = document.createElement("div");

    container.appendChild(cell).className = "grid-item";
  }
}

function reset() {
  document.querySelectorAll(".grid-item").forEach((item) => item.remove());
  makeGrid((val = slider.value));
}

function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const container = document.getElementById("container");
container.addEventListener("mouseover", (e) => {
  if (e.target.className == "grid-item") {
    if (rainActive == true) {
      e.target.style.backgroundColor = generateRandomColor();
    } else {
      e.target.style.backgroundColor = "black";
    }
  }
});

var sizeText = document.querySelector("#sizeValue");
var slider = document.getElementById("range");
slider.addEventListener("change", () => {
  let val = slider.value;
  sizeText.innerHTML = `Grid ${val}x${val}`;
  reset();
});

var resetGrid = document.querySelector(".reset");
resetGrid.addEventListener("click", reset);

var rainActive = false;
var rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", (e) => {
  if (rainActive == false) {
    rainActive = true;
    e.target.style.backgroundColor = "#7895CB";
    e.target.style.transition = "0.3s ease";
  } else {
    rainActive = false;
    e.target.style.backgroundColor = "#c5dff8";
  }
  console.log(rainActive.toString());
});

makeGrid(16);
