const container = document.querySelector("#container");
let setup=256;

//set up the grid - may need to turn this into a function later
for (let i = 0; i < setup; i++) {
  const div = document.createElement('div');
  div.classList.add("item");
  div.textContent=parseInt(i+1);
  container.appendChild(div);
}

//Event listener for mouse hover
for (let i = 0; i < setup; i++) {
document.getElementsByClassName("item")[i].addEventListener("mouseover",
 function() {document.getElementsByClassName("item")[i].style.backgroundColor =
  "blue";
});
};

//reset grid to initial state
let reset = function() {
  for (let i = 0; i < setup; i++) {
  container.removeChild(container.childNodes[0]);
  };

  setup = Math.pow(prompt("How many squares per side would you like to generate?"),2);
  colRow = Math.sqrt(setup);
  console.log(colRow);
  //document.querySelector(".grid").style.gridTemplateColumns = "repeat(colRow, 1fr)";
  //document.querySelector(".grid").style.gridTemplateRows =  "repeat(colRow, 1fr)";

  for (let i = 0; i < setup; i++) {
    const div = document.createElement('div');
    div.classList.add("item");
    div.textContent=parseInt(i+1);
    container.appendChild(div);
  }

  for (let i = 0; i < setup; i++) {
  document.getElementsByClassName("item")[i].addEventListener("mouseover",
   function() {document.getElementsByClassName("item")[i].style.backgroundColor =
    "blue";
  });
  };
}

//Event listener for reset button
document.getElementById("reset").addEventListener("click", reset);
