const API = "https://jsonplaceholder.typicode.com/posts"; // 100 fake posts
const listEl = document.getElementById("list");
const searchEl = document.getElementById("search");
const statusEl = document.getElementById("status");
const errorEl = document.getElementById("error");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const pageInfo = document.getElementById("pageInfo");

let all = [];        // all fetched items
let filtered = [];   // filtered by search
let page = 1;        // current page (1-based)
const perPage = 10;  // items per page

init();

function init() {
  load();
  searchEl.addEventListener("input", () => {
    page = 1;
    applyFilter();
    render();
  });
  prevBtn.addEventListener("click", () => { page--; render(); });
  nextBtn.addEventListener("click", () => { page++; render(); });
}

async function load() {
  setStatus("Loading…");
  hideError();
  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    all = await res.json();
    applyFilter();   // ✅ rättat stavning
    render();
    setStatus("Done");
  } catch (err) {
    showError("Failed to fetch data. Please try again.");
    console.error(err);
    setStatus("Error");
  }
}

function applyFilter() {
  const q = searchEl.value.trim().toLowerCase();
  filtered = q ? all.filter(p => p.title.toLowerCase().includes(q))
               : all.slice();
}

function render() {
  // pagination math
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  page = Math.min(Math.max(1, page), totalPages);
  const start = (page - 1) * perPage;
  const items = filtered.slice(start, start + perPage);

  // list
  listEl.innerHTML = "";
  if (items.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No results.";
    listEl.appendChild(li);
  } else {
    items.forEach(p => listEl.appendChild(renderItem(p)));
  }

  // pager
  prevBtn.disabled = page <= 1;
  nextBtn.disabled = page >= totalPages;
  pageInfo.textContent = `Page ${page}/${totalPages}`;
}

function renderItem(post) {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  h3.textContent = post.title;
  p.textContent = post.body;
  li.append(h3, p);
  return li;
}

function setStatus(text) {
  statusEl.textContent = text;
}

function showError(msg) {
  errorEl.textContent = msg;
  errorEl.classList.remove("hidden");
}

function hideError() {
  errorEl.textContent = "";
  errorEl.classList.add("hidden");
}