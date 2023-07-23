/**
 * Create a progress bar that takes n seconds to complete, Make the progress bar queueable, i.e: on button click, the progress bar should restart after the current one is complete
 * Difference between promises, async/await, with examples.
 */

const root = document.getElementById("root");
// Create 5 Progress bars
let count = 0;

function create(n = 2) {
  // Dynamically generate the element and add that into the root.
  const progress = document.createElement("div");
  // Add the progress__bar class to the root element
  progress.classList.add("progress__bar");
  progress.style.transition = `width ${n}s  ease`;
  // Append the child to the root element
  root.appendChild(progress);
  // Add animation, this will give buffer to the dom to give it some time to show the transistion
  setTimeout(() => progress.classList.add("progress__fullwidth"), 50);
  // After completing the above transition, we need to generate another progress bar
  progress.addEventListener("transitionend", () => {
    // One of the progress bar has been finished transitioning
    --count;
    // If there are still some counts left
    if (count >= 1) create();
  });
  // Cleanup the memory, `Always make sure to remove event listener after adding it`
  progress.removeEventListener("transitionend", () => {});
}

/**
 * Progress bar should be queueable
 */
function add() {
  if (count === 0) create();
  ++count;
}
