import "./styles.css";
import { greeting } from "./new-note.js";

console.log(greeting);

function Note (title, description, dueDate) {
    this.title=title;
    this.description=description;
    this.dueDate=dueDate;
  }

