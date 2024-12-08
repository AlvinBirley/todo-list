import { addRadio } from './add-radio.js';

export function newProject() {
  const projText = document.getElementById("addProject");

  // Get the value of the project name from the text input
  const projName = projText.value;

  // Select the inner-project-div container
  const getInnerProjDiv = document.getElementsByClassName("inner-project-div")[0];    

  // Create a new project div and append it to the inner-project-div
  const newProj = document.createElement("div");
  newProj.classList.add("general");
  getInnerProjDiv.appendChild(newProj);

  // Create header div for the project
  const projHeader = document.createElement("div");
  projHeader.classList.add("gen-header");
  newProj.appendChild(projHeader);

  const headerDivOne = document.createElement("div");
  headerDivOne.classList.add("column-1");
  projHeader.appendChild(headerDivOne);

  const makeHeaderBtn = document.createElement("button");
  makeHeaderBtn.classList.add("project-btn");
  makeHeaderBtn.innerHTML = "Delete";
  headerDivOne.appendChild(makeHeaderBtn);

  const headerDivTwo = document.createElement("div");
  headerDivTwo.classList.add("column-2");
  projHeader.appendChild(headerDivTwo);

  // Add project name as a label in the header
  const makeHeader = document.createElement("p");
  makeHeader.textContent = projName;
  headerDivTwo.appendChild(makeHeader);

  // Create a new checkbox for the project and append it to the radio-btns container
  const checkbox = document.createElement("input");
  checkbox.type = 'checkbox';
  checkbox.id = projName;  // Set the ID to the project name
  checkbox.setAttribute('data-project-name', projName);

  const label = document.createElement('label');
  label.textContent = projName;
  label.setAttribute('for', projName);

  // Append the checkbox and label to the radio-btns container
  const radioBtnsContainer = document.querySelector(".radio-btns");
  radioBtnsContainer.appendChild(checkbox);
  radioBtnsContainer.appendChild(label);

  // Add an event listener to handle single checkbox selection (radio button behavior)
  checkbox.addEventListener('click', () => {
    const checkboxes = radioBtnsContainer.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((otherCheckbox) => {
      if (otherCheckbox !== checkbox) {
        otherCheckbox.checked = false; // Uncheck all other checkboxes
      }
    });
  });

  // Clear the input field after creating the project
  projText.value = '';

  // Add event listener to remove the project when the delete button is clicked
  makeHeaderBtn.addEventListener('click', () => {
    newProj.remove();
    checkbox.remove();  // Also remove the checkbox for this project
  });

  return newProj;  // Return the new project div for later use
}