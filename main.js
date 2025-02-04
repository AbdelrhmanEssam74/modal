// Helper functions for toggling visibility and updating link text
function toggleVisibility(element, linkElement, expandedText, collapsedText) {
  const isHidden = element.style.display === "none";
  element.style.display = isHidden ? "flex" : "none";
  linkElement.innerHTML = isHidden
    ? `<span>↑</span> ${expandedText}`
    : `<span>↓</span> ${collapsedText}`;
}

// Modal handling
const modal = document.getElementById("myModal");
const closeButton = document.querySelector(".close");
const acceptButton = document.querySelector(".save-button");

// Open the modal on load
window.onload = () => (modal.style.display = "block");

// Close the modal when the close button is clicked
closeButton.onclick = () => (modal.style.display = "none");
acceptButton.onclick = () => (modal.style.display = "none");

// Close the modal if the user clicks outside of the modal
window.onclick = (event) => {
  if (event.target === modal) modal.style.display = "none";
};

// First Toggle (Marketing Link)
const marketingLink = document.getElementById("marketing-link");
const firstHiddenToggle = document.getElementById("first-hidden-toggle");

marketingLink.addEventListener("click", (e) => {
  e.preventDefault();
  toggleVisibility(firstHiddenToggle, marketingLink, "1 Dienst", "1 Dienst");
});

// Synchronize toggling between marketing toggle and extra checkbox
const extraToggleCheckbox = document.querySelector(
  ".extra-toggle input[type='checkbox']"
);
const marketingToggle = document.getElementById("marketing-toggle");

function syncCheckboxes(checkbox1, checkbox2) {
  checkbox1.addEventListener("change", () => {
    checkbox2.checked = checkbox1.checked;
  });
  checkbox2.addEventListener("change", () => {
    checkbox1.checked = checkbox2.checked;
  });
}

syncCheckboxes(marketingToggle, extraToggleCheckbox);

// Second Toggle (Essential)
const essentialLink = document.querySelectorAll(".cm-caret a")[1];
const secondHiddenToggle = document.getElementById("second-hidden-toggle");

essentialLink.addEventListener("click", (e) => {
  e.preventDefault();
  toggleVisibility(secondHiddenToggle, essentialLink, "1 Dienst", "1 Dienst");
});
