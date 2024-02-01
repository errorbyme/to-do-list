const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const listgroup = document.querySelector(".list-group");
const form = document.querySelector("form");
form.onsubmit = (e) => {
  e.preventDefault();
};
function addTask() {
  if (inputBox.value == "") {
    alert("cant be empty");
  } else {
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = inputBox.value;
    listgroup.appendChild(li);
    li.classList.add("list-group-item");
    let span = document.createElement("span");
    li.appendChild(span);
    let hr = document.createElement("hr");
    li.appendChild(hr);
    let i = document.createElement("i");
    i.innerHTML = "\u00d7";
    li.appendChild(i);
    saveData();
  }
  inputBox.value = "";
}
listgroup.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "I") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

saveData = () => {
  localStorage.setItem("data", listgroup.innerHTML);
};
showTask = () => {
  listgroup.innerHTML = localStorage.getItem("data");
};
showTask();
