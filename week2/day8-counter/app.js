const countEl = document.getElementById("count")
const incBtn = document.getElementById("increase")
const decBtn = document.getElementById("decrease")
const resetBtn = document.getElementById("reset")

let count = 0;

function render() {
    countEl.textContent = count;
}

incBtn.addEventListener("click", () => {
    count++;
    render();
});

decBtn.addEventListener("click", () => {
    count--;
    render();
})

resetBtn.addEventListener("click", () => {
    count = 0;
    render();
})

// initial render
render();