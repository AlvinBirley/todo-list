import "./styles.css";
// Import countProjects function
import { countProjects } from "./count-projects.js";

// Importing the newProject function that appends a new div to the inner-project-div
import { newProject } from './add-project.js';
// Import createArray function
import { createArray } from './create-array.js';
// Import disableProjBtn function
import { disableProjBtn } from "./disable-proj-btn.js";
import { disableTaskBtn } from "./disable-task-btn.js";

// Create projBtn button
const projBtn = document.getElementById('make-new-proj');
// Select projField text input
const projField = document.getElementById('addProject');

// Select the task button
const addTaskBtn = document.getElementById('add-task').querySelector('button');

// Select the input fields
const titleField = document.getElementById('title');
const descriptionField = document.getElementById('description');
const dueDateField = document.getElementById('dueDate');

// Select radio buttons container
const radioBtnsContainer = document.querySelector('.radio-btns');

// Disable project button until text field is clicked
projField.addEventListener('input', disableProjBtn);
disableProjBtn();

// Add project div to inner-project-div and count number of divs in inner-project-div
projBtn.addEventListener('click', function () {
  newProject();
  countProjects();
  disableProjBtn();
});

// Function to disable Add Task button
function disableAddTaskBtn() {
  const titleValue = titleField.value.trim();
  const descriptionValue = descriptionField.value.trim();
  const dueDateValue = dueDateField.value.trim();
  const isRadioChecked = radioBtnsContainer.querySelector('input[type="radio"]:checked') !== null;

  // Enable Add Task button only if all fields are filled and a radio is selected
  if (titleValue && descriptionValue && dueDateValue && isRadioChecked) {
    addTaskBtn.disabled = false;
  } else {
    addTaskBtn.disabled = true;
  }
}

// Event listeners for title, description, and due date fields
titleField.addEventListener('input', disableAddTaskBtn);
descriptionField.addEventListener('input', disableAddTaskBtn);
dueDateField.addEventListener('input', disableAddTaskBtn);

// Event listener for radio buttons (which will be added as projects)
radioBtnsContainer.addEventListener('change', disableAddTaskBtn);

// Call disableAddTaskBtn initially to disable the button if fields are empty
disableAddTaskBtn();