// Elements
const input = document.getElementById("itemInput");
const select = document.getElementById("prioSelect");
const addBtn = document.getElementById("addBtn");

const lists = {
  must:   document.getElementById("mustList"),
  should: document.getElementById("shouldList"),
  could:  document.getElementById("couldList"),
  wont:   document.getElementById("wontList"),
};

const STORAGE_KEY = "day6.moscow.v1";

/** @type {{id:string, text:string, prio:'must'|'should'|'could'|'wont'}[]} */
let items = [];

// Storage
const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
const load = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    items = raw ? JSON.parse(raw) : [];
  } catch { items = []; }
};

// Helpers
const nextPrio = (p) =>
  p === "must" ? "should" :
  p === "should" ? "could" :
  p === "could" ? "wont" : "must";

// Render
function render() {
  Object.values(lists).forEach(ul => ul.innerHTML = "");
  items.forEach(it => {
    const li = document.createElement("li");
    li.className = it.prio;

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = it.prio.toUpperCase();

    const text = document.createElement("span");
    text.textContent = it.text;

    const controls = document.createElement("div");
    controls.className = "controls";

    const cycleBtn = document.createElement("button");
    cycleBtn.title = "Cycle priority";
    cycleBtn.textContent = "↻";
    cycleBtn.addEventListener("click", () => {
      it.prio = nextPrio(it.prio);
      save(); render();
    });

    const delBtn = document.createElement("button");
    delBtn.className = "danger";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      items = items.filter(x => x.id !== it.id);
      save(); render();
    });

    // Also cycle when clicking the item text
    li.addEventListener("click", (e) => {
      if (e.target === cycleBtn || e.target === delBtn) return;
      it.prio = nextPrio(it.prio);
      save(); render();
    });

    controls.append(cycleBtn, delBtn);
    li.append(badge, text, controls);
    lists[it.prio].appendChild(li);
  });
}

// Actions
function add(text, prio) {
  const t = text.trim();
  if (!t) return;
  items.push({ id: Date.now().toString(), text: t, prio });
  input.value = "";
  save(); render();
}

// Events
addBtn.addEventListener("click", () => add(input.value, select.value));
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") add(input.value, select.value);
});

// Init
load(); render();
console.log("MoSCoW ready ✅");