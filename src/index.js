import "./styles.css";
import { greeting } from "./new-note.js";

console.log(greeting);

function Note (title, description, dueDate) {
    this.title=title;
    this.description=description;
    this.dueDate=dueDate;
  }

/**IMPORTING THE newProject FUNCTION THAT APPENDS A NEW DIV TO THE INNER=PROJECT-DIV**/
  import { newProject } from './add-project.js';


//**ADDING NEW DIVS TO THE INNER-PROJECT-DIV DIV**/
newProject();
newProject();
newProject();
newProject();




