import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

function Note (title, description, dueDate) {
    this.title=title;
    this.description=description;
    this.dueDate=dueDate;
  }

//create new array factory function with methods to manipulate the arrays
  function createArray (firstNote) {
    //array with first note
    let arr = [firstNote];
    //returning object with methods to add to array
    return {
        addElement: function(element) {
            //add element to array
            arr.push(element)
        },
        getArray: function() {
            //return current array
            return arr;
        },

        deleteElement: function() {
            arr.pop()
        }
    }

  }
