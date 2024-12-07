
//**CREATE NEW ARRAY FACTORY FUNCTION WITH METHODS TO MANIPULATE THE ARRAY**//
export function createArray () {
    //array with first note
    let arr = [];
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

