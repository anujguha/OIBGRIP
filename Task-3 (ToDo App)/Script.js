const input = document.querySelector("input");
const addButton = document.querySelector("button");
const list = document.querySelector(".list");

addButton.addEventListener("click", () => {
  const todo = input.value;
  if (todo !== "") {
    const li = document.createElement("li");
    li.textContent = todo;
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
    list.appendChild(li);
    input.value = "";
  }
});
