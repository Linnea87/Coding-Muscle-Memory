const input = document.getElementById("nameInput");
const btn = document.getElementById("fetchBtn");
const card = document.getElementById("result");
const resName = document.getElementById("resName");
const resAge = document.getElementById("resAge");
const resCount = document.getElementById("resCount");
const errorEl = document.getElementById("error");

btn.addEventListener("click", fetchAge);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") fetchAge();
});

async function fetchAge() {
    const name = input.value.trim();
    hideError();
    if (!name) {
        showError("Please enter a name.");
        return;
    }

    try {
    btn.disabled = true;
    btn.textContent = "Loading…";

    const url = `https://api.agify.io?name=${encodeURIComponent(name)}`;
    const res = await fetch(url);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json(); // { name, age, count }

    resName.textContent = `Name: ${data.name ?? "–"}`;
    resAge.textContent = `Age: ${data.age ?? "unknown"}`;
    resCount.textContent = `Count: ${data.count ?? 0}`;

    card.classList.remove("hidden");
  } catch (err) {
    showError("Failed to fetch age. Try another name.");
    card.classList.add("hidden");
    console.error(err);
  } finally {
    btn.disabled = false;
    btn.textContent = "Fetch age";
  }
}

function showError(msg) {
    errorEl.textContent = msg;
    errorEl.classList.remove("hidden");
}

function hideError() {
    errorEl.textContent = "";
    errorEl.classList.add("hidden");
}
