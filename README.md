# Coding Muscle Memory 🧠💪

A repo for daily coding practice – building habits step by step.

---

## Week 1

### Day 1 – Hello World
**Goal:**  
Start with HTML + JavaScript basics.

**What the exercise does:**  
- Shows a "Hello, World!" heading on the page.  
- One button logs a message to the console **and** updates the page text.  
- Another button updates the page text directly.  

**What I practiced:**  
- Writing minimal HTML5 structure.  
- Using `<script>` to run JavaScript.  
- `console.log()` for debugging.  
- Accessing elements with `document.getElementById()`.  
- Updating text on the page with `.textContent`.  
- Handling button clicks with `onclick`.  

---
### Day 2 – JS Basics
**Goal:**  
Practice fundamental JavaScript concepts.

**What the exercise does:**  
- Logs a message using variables and template literals.  
- Calls a function that returns a value and updates the DOM.  
- Uses an array with `map` and `filter` to transform data and display the result.  

**What I practiced:**  
- Declaring variables with `let` and `const`.  
- Using template literals with backticks.  
- Writing and calling functions.  
- Updating the DOM with `.textContent`.  
- Working with arrays (`map`, `filter`).  
- Adding multiple event listeners.

---
### Day 3 – To-Do App  
**Goal:**  
Build a small to-do app to practice DOM manipulation, event handling, and persistence.  

**What the exercise does:**  
- Add tasks via button or Enter  
- Toggle tasks as done/undone  
- Delete tasks, clear completed, or clear all (with confirm)  
- Persist list using localStorage  
- Split code into index.html, style.css, and app.js  

**What I practiced:**  
- Selecting and updating DOM nodes  
- Handling multiple events (click, keydown for Enter)  
- Working with arrays of objects to represent tasks  
- Rendering lists and syncing UI ↔ state  
- Simple ID generation with Date.now().toString()  
- Saving and loading data with localStorage  

**Path:** week1/day3-to-do-app/  

---
### Day 4 – Git Branch Test  
**Goal:**  
Practice creating and working with Git branches.  

**What the exercise does:**  
- Created a new branch `feature/day4-git-branch-test`  
- Added a simple HTML page (`index.html`) to test branching workflow  
- Committed and pushed the branch  
- Merged changes back into `main`  

**What I practiced:**  
- Creating and switching branches (`git checkout -b`)  
- Adding and committing changes on a feature branch  
- Pushing a branch to GitHub (`git push -u origin branch-name`)  
- Merging a feature branch into `main`  
- Keeping the repo organized by day-specific folders  

**Path:** week1/day4-git-branch-test/  

---
### Day 5 – Codewars  
**Goal:**  
Practice solving coding challenges on Codewars and save solutions for reference.  

**What the exercise does:**  
- Implemented a simple function (`sum`) that returns the sum of two numbers  
- Ran the solution locally with Node.js to verify output  

**What I practiced:**  
- Writing functions in JavaScript  
- Running and testing code locally with Node.js  
- Using basic assertions to check expected results  

**Path:** week1/day5-codewars/  

---
### Day 6 – MoSCoW Demo  
**Goal:**  
Practice the MoSCoW prioritization technique and build an interactive demo with JavaScript.  

**What the exercise does:**  
- Add items with a text and assign them to one of four priorities (Must, Should, Could, Won’t)  
- Displays items in four separate columns  
- Items can change priority by clicking them or using the cycle button  
- Items can be deleted individually  
- All data is persisted using localStorage  
- App split into index.html, style.css, and app.js  

**What I practiced:**  
- Creating multi-column layouts with CSS Grid  
- Using select inputs and dynamically appending list items in the DOM  
- Cycling state through a helper function (`nextPrio`)  
- Adding event listeners to both items and buttons  
- Persisting and re-rendering structured data with localStorage  

**Path:** week1/day6-moscow-demo/  

---
### Day 7 – Fun CSS  
**Goal:**  
Play with CSS effects and animations to get comfortable styling UI elements.

**What the exercise does:**  
- Three playful buttons with different hover effects (bounce, glow, rainbow background)  
- A simple flip card using `transform` and `transition`  
- Responsive layout with clean, minimal styling

**What I practiced:**  
- CSS transitions and keyframe animations  
- Gradients and animated backgrounds  
- Hover states and pseudo-classes  
- 3D transforms (`transform: rotateY`, `perspective`)  
- Organizing styles in a separate `style.css`

**Path:** week1/day7-fun-css/

---
### Day 8 – Counter  
**Goal:**  
Build a simple interactive counter with JavaScript.  

**What the exercise does:**  
- Displays a number that can be increased or decreased  
- Buttons for `+`, `-`, and `Reset`  
- Updates the DOM dynamically when buttons are clicked  
- Keeps logic clean and separated in `app.js` with rendering function  

**What I practiced:**  
- Selecting DOM elements with `getElementById`  
- Updating the DOM with `.textContent`  
- Handling `click` events with `addEventListener`  
- Writing a simple `render()` function to keep UI in sync with state  
- Organizing files into `index.html`, `style.css`, and `app.js`  

**Path:** week2/day8-counter/  

---
### Day 9 – API Test  
**Goal:**  
Practice fetching data from an open API and updating the DOM with the results.  

**What the exercise does:**  
- User can type a name into an input field  
- On button click (or pressing Enter), the app fetches data from **[Agify.io](https://agify.io/)**  
- Displays the predicted age, name, and count of entries in a styled card  
- Handles errors gracefully and shows a message if something goes wrong  

**What I practiced:**  
- Using the `fetch` API with async/await  
- Handling user input and validating empty values  
- Error handling for network/API failures  
- Updating the DOM dynamically with fetched JSON data  
- Organizing code into `index.html`, `style.css`, and `app.js`  

**Path:** week2/day9-api-test/  

(more days/exercises will be added as I go 🚀)