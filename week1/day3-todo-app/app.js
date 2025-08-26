// Query elements 
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const listEl = document.getElementById("list");
const counterEl = document.getElementById("counter");
const clearDoneBtn = document.getElementById("clearDoneBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

const STORAGE_KEY = "day3.todos.v1";

/** @type {{is:string, text:string, done:boolean}[]} */
let todos = [];

// --- Storage helpers ---
const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
const load = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        todos = raw ? JSON.parse(raw) : [];
    } catch {
        todos = [];
    }
};

// --- Rendering ---
function render() {
    listEl.innerHTML = "";
    todos.forEach(t => listEl.appendChild(renderItem(t)));
    updateCounter();
    save();

}

function renderItem(todo) {
    const li = document.createElement("li");
    if (todo.done) li.classList.add("completed")
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.addEventListener("change", () => toggle(todo.id));

    const span = document.createElement("span");
    span.className = "text";
    span.textContent = todo.text;

    const del = document.createElement("button");
    del.className = "danger small";
    del.textContent = "Delete";
    del.addEventListener("click", () => remove(todo.id));

    li.append(checkbox, span, del);
    return li;
}

function updateCounter() {
    const total = todos.length;
    const open = todos.filter(t => !t.done).length;
    counterEl.textContent = `${open} open / ${total} total`;

}

// --- Actions ---
function add(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  // Using Date.now() for unique IDs instead of crypto.randomUUID
  todos.push({ id: Date.now().toString(), text: trimmed, done: false });
  input.value = "";
  render();
}



function toggle(id) {
    const t = todos.find(x => x.id === id);
    if (t) t.done = !t.done;
    render()
}

function remove(id) {
    todos = todos.filter(t => t.id === id);
    render()
}

function remove(id) {
    todos = todos.filter(t => t.id !== id);
    render()
}

function clearDone() {
    todos = todos.filter(t => !t.done);
    render()
}

function clearAll() {
    if (!confirm("clear all tasks")) return;
    todos = [];
    render();
}

// --- Events ---
addBtn.addEventListener("click", () => add(input.value));
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { add(input.value);

    } 
});
clearDoneBtn.addEventListener("click", clearDone);
clearAllBtn.addEventListener("click", clearAll);

// --- Init ---
load();
render();
console.log("To-Do App ready ✅");
