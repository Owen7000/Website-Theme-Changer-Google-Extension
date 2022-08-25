let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetButtonColours = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

function handleButtonClick(event) {
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  let colour = event.target.dataset.colour;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ colour });
}

function constructOptions(buttonColours) {
  chrome.storage.sync.get("colour", (data) => {
    let currentColour = data.colour;
    for (let buttonColour of buttonColours) {
      let button = document.createElement("button");
      button.dataset.colour = buttonColour;
      button.style.backgroundColour = buttonColour;

      if (buttonColour === currentColour) {
        button.classList.add(selectedClassName);
      }
      button.addEventListener("click", handleButtonClick);
      page.appendChild(button);
    }
  });
}
constructOptions(presetButtonColours);