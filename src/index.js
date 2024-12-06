import "./styles.css";
//**IMPORT countProjects FUNCTION**/
import {countProjects} from "./count-projects.js"

/**IMPORTING THE newProject FUNCTION THAT APPENDS A NEW DIV TO THE INNER=PROJECT-DIV**/
import { newProject } from './add-project.js';

//**CREATE projBtn BUTTON**//
const projBtn = document.querySelector('.project-btn');

//**ADD PROJECT DIV TO INNER-PROJECT-DIV AND COUNT NUMBER OF DIVS IN INNER-PROJECT-DIV**/
projBtn.addEventListener('click', function() {
 newProject();
 countProjects();
})



