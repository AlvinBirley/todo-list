//**ADD RADIO BUTTON ASSOCIATED WITH NEWLY CREATED PROJECT TO radio-btns DIV**/

export function addRadio () {
    //**GET VALUE OF PROJECT TEXT FIELD**//
    const projName = document.getElementById("addProject").value;

    //**SELECT RADIO BUTTONS DIV**/
    const getRadioDiv = document.querySelector(".radio-btns");

    //**MAKE RADIO INPUT AND GIVE IT LABEL BASED ON VALUE OF TEXT FIELD**/
    const makeRadio = document.createElement("input");
    makeRadio.type = 'radio';
    const label = document.createElement('label');
    label.textContent = projName;

    //**APPEND RADIO INPUT AND LABEL INTO RADIO INPUT DIV**/
    getRadioDiv.appendChild(makeRadio);
    getRadioDiv.appendChild(label);
}