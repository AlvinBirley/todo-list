//greeting.js  
export const greeting = "Hello, Odinite!"

//general array 
const genArray = []

//Factory function to create note 
function Note (title, description, dueDate) {
    this.title=title;
    this.description=description;
    this.dueDate=dueDate;
  }


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
        }
    }

  }
let treeNote = createArray("cut down tree")
treeNote.addElement('then turn into bench')
  console.log(treeNote.getArray)
