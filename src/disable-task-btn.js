
// Function to disable Add Task button
export function disableAddTaskBtn() {
    const titleValue = titleField.value.trim();
    const descriptionValue = descriptionField.value.trim();
    const dueDateValue = dueDateField.value.trim();
    const isRadioChecked = radioBtnsContainer.querySelector('input[type="checkbox"]:checked') !== null;
  
    // Enable Add Task button only if all fields are filled and a radio is selected
    if (titleValue && descriptionValue && dueDateValue && isRadioChecked) {
      addTaskBtn.disabled = false;
    } else {
      addTaskBtn.disabled = true;
    }
  }