
// Event delegation

document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});

// always remember e.target.tagName return the tag name in Uppercase;
