const formNewShortcut = document.getElementById("new-shortcut");
const shortcutsList = document.getElementById("shortcuts-list");
const actionsList = document.getElementById("actions-list");

const data = {
  shortcuts: [],
};

formNewShortcut.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const obj = {};
  obj.title = form.title.value;
  obj.url = form.url.value;
  obj.icon = form.icon.value;

  createNewShortcut(obj);
});

const createNewShortcut = (obj) => {
  data.shortcuts.push(obj);

  const li = document.createElement("li");
  li.classList.add("shortcuts-list__item");
  const a = document.createElement("a");
  a.href = obj.url;
  li.append(a);
  const img = document.createElement("img");
  img.src = obj.icon;
  const span = document.createElement("span");
  span.innerText = obj.title;
  a.append(img, span);

  shortcutsList.append(li);

  console.log("Added new shortcut :", obj);
};

actionsList.addEventListener("click", (e) => {
  if (!e.target.closest("button")) return;

  if (e.target.closest('[data-action="create-new-shortcut"]')) {
    formNewShortcut.classList.toggle("hidden");
  }
});
