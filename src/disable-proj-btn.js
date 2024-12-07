
export function disableProjBtn() {
    const projField = document.getElementById('addProject');
    const projBtn = document.getElementById('make-new-proj');

    if (projField.value.trim() !== '') {
        projBtn.disabled = false; 
    } else {
        projBtn.disabled = true; 
    }
}