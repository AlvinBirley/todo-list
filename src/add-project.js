//**ADD NEW PROJECT TO INNER-PROJECT-DIV**/

import {addRadio} from './add-radio.js';


//**FUNCTION TO ADD NEW PROJECT DIV TO THE INNER-PROJECT-DIV DIV**/
export function newProject(){

    //**THIS IS HOW TO GET THE VALUE OF THE TEXT FIELD**/
const projName = document.getElementById("addProject").value;

    //**SELECT INNER-PROJECT-DIV**/
    const getInnerProjDiv = document.getElementsByClassName("inner-project-div")[0];    
    
    //**CREATE NEW PROJECT DIVE AND APPEND TO INNER-PROJECT-DIV**/
    const newProj = document.createElement("div");
    newProj.classList.add('general');
    getInnerProjDiv.appendChild(newProj);

     //**CREATE HEADER DIV AND APPEND TO newProj DIV**/
    const projHeader = document.createElement("div");
    projHeader.classList.add('gen-header');
    newProj.appendChild(projHeader);

    //**CREATE PROJECT LABEL WITH P TAG AND APPEND TO projHeader DIV**/
    const makeHeader = document.createElement("p");
    makeHeader.textContent += projName;
    projHeader.appendChild(makeHeader);

    //**ADD RADIO INPUT CORRESPONDING WITH TEXT FIELD OF NEW PROJECT INTO THE RADIO INPUT DIV**/
    addRadio();

}