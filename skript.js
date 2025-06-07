let removeDive = document.querySelector("#mycontainer");

let toglebtn = document.querySelector("#myclosebtn");

let startupbtn = document.querySelector("#startupbtn");

function divremover() {
  removeDive.classList.add("removeContainer");
  removeDive.classList.remove("addContainer");
  startupbtn.style.display = "block";
}

function divadd() {
  removeDive.classList.toggle("addContainer");
  removeDive.classList.remove("removeContainer");
  startupbtn.style.display = "none";
}

if (window.getComputedStyle(removeDive).display === "none") {
  startupbtn.style.display = "block";
} else {
  startupbtn.style.display = "none";
}
startupbtn.addEventListener("click", divadd);
toglebtn.addEventListener("click", divremover);
