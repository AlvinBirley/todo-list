//**ADD NEW PROJECT TO INNER-PROJECT-DIV**/

//**THIS IS HOW TO GET THE VALUE OF THE TEXT FIELD**/
const titleValue = document.getElementById("title").value;

//**FUNCTION TO ADD NEW PROJECT DIV TO THE INNER-PROJECT-DIV DIV**/
export function newProject(){
    const getInnerProjDiv = document.getElementsByClassName("inner-project-div")[0];    
    const newProj = document.createElement("div");
    getInnerProjDiv.appendChild(newProj);
}