//**ADD NEW PROJECT TO INNER-PROJECT-DIV**/

import {addRadio} from './add-radio.js';


//**FUNCTION TO ADD NEW PROJECT DIV TO THE INNER-PROJECT-DIV DIV**/
export function newProject(){
   
    const projText = document.getElementById("addProject")

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

    const headerDivOne = document.createElement("div");
    headerDivOne.classList.add('column-1');
    projHeader.appendChild(headerDivOne);

    const makeHeaderBtn = document.createElement("button");
    headerDivOne.classList.add('project-btn');
    makeHeaderBtn.innerHTML="Delete"
    headerDivOne.appendChild(makeHeaderBtn);


    const headerDivTwo = document.createElement("div");
    headerDivTwo.classList.add('column-2');
    projHeader.appendChild(headerDivTwo);

    //**CREATE PROJECT LABEL WITH P TAG AND APPEND TO projHeader DIV**/
    const makeHeader = document.createElement("p");
    makeHeader.textContent += projName;
    headerDivTwo.appendChild(makeHeader);

    //**ADD RADIO INPUT CORRESPONDING WITH TEXT FIELD OF NEW PROJECT INTO THE RADIO INPUT DIV**/
    addRadio();

    projText.value = '';

    makeHeaderBtn.addEventListener('click', () => {
        // When clicked, remove the newProj div from the DOM
        newProj.remove();
    });
}