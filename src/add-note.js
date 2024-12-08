export function addTask(selectedProjectName) {
    // Create a new div for the task inside the project div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("note-div");
  
    // Add some example content (you can customize this based on your requirements)
    const taskBTN = document.createElement("button");
    taskBTN.classList.add("task-del");
    taskBTN.innerHTML = "x";

    taskBTN.addEventListener('click', () => {
        taskDiv.remove();
      });
  
    const taskTitle = document.createElement("p");
    const titleValue = document.getElementById("title").value;
    taskTitle.textContent = `Title: ${titleValue}`;
  
    const taskDescrip = document.createElement("p");
    const descripValue = document.getElementById("description").value;
    taskDescrip.textContent = `Descrip: ${descripValue}`;
  
    const dueDate = document.createElement("p");
    const dueDateValue = document.getElementById("dueDate").value;
    dueDate.textContent = `Due: ${dueDateValue}`;
  
    // Append the task content to the task div
    taskDiv.appendChild(taskBTN);
    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskDescrip);
    taskDiv.appendChild(dueDate);
  
    // Find the project div that matches the selected project name
    const projectDivs = document.querySelectorAll('.general');  // Assuming projects have class "general"
    let targetProjectDiv = null;
  
    // Loop through each project div and find the one that matches the selected name
    for (let div of projectDivs) {
      const projectTitle = div.querySelector('.gen-header .column-2 p').textContent;
      if (projectTitle === selectedProjectName) {
        targetProjectDiv = div;
        break;
      }
    }
  
    if (targetProjectDiv) {
      // Append the task div to the found project div
      targetProjectDiv.appendChild(taskDiv);
    } else {
      console.error('No matching project found');
    }
  }
  