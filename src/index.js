import "./styles.css";
// Import functions
import { countProjects } from "./count-projects.js";
import { newProject } from './add-project.js';
import { addTask } from './add-note.js';  // Import the task-adding function
import { disableProjBtn } from "./disable-proj-btn.js";



const projBtn = document.getElementById('make-new-proj');
const projField = document.getElementById('addProject');
const addTaskBtn = document.getElementById('add-task').querySelector('button');

// Select the input fields for task creation
const titleField = document.getElementById('title');
const descriptionField = document.getElementById('description');
const dueDateField = document.getElementById('dueDate');
const radioBtnsContainer = document.querySelector('.radio-btns');

// Variable to hold reference to the last created project
let currentProj = null;

function getSelectedProjectName() {
    const selectedRadio = radioBtnsContainer.querySelector('input[type="checkbox"]:checked');
    if (selectedRadio) {
      return selectedRadio.getAttribute('data-project-name');
    }
    return null;  // No project selected
  }

// Disable project button until text field is clicked
projField.addEventListener('input', () => {
  disableProjBtn();
});
disableProjBtn();

projBtn.addEventListener('click', function () {
  currentProj = newProject();  // Create a new project and save the reference to currentProj
  countProjects();
  disableProjBtn();
});

addTaskBtn.addEventListener('click', () => {
    const selectedProjectName = getSelectedProjectName();
    if (selectedProjectName && currentProj) {
      addTask(selectedProjectName);  // Pass the selected project name to the addTask function
    }
  });

// Function to disable Add Task button based on the form inputs
function disableAddTaskBtn() {
  const titleValue = titleField.value.trim();
  const descriptionValue = descriptionField.value.trim();
  const dueDateValue = dueDateField.value.trim();
  const isRadioChecked = radioBtnsContainer.querySelector('input[type="checkbox"]:checked') !== null;

  if (titleValue && descriptionValue && dueDateValue && isRadioChecked) {
    addTaskBtn.disabled = false;
  } else {
    addTaskBtn.disabled = true;
  }
}

// Event listeners for task input fields
titleField.addEventListener('input', disableAddTaskBtn);
descriptionField.addEventListener('input', disableAddTaskBtn);
dueDateField.addEventListener('input', disableAddTaskBtn);
radioBtnsContainer.addEventListener('change', disableAddTaskBtn);

// Initial call to disable the Add Task button if fields are empty
disableAddTaskBtn();


