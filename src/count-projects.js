//**Count number of divs in project-container div**/
export function countProjects () {
const parentDiv = document.getElementById("project-container");
const directChildren = parentDiv.children;
const childCount = directChildren.length
console.log(childCount);
}

