
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


//**ADDING ELEMENTS TO THE ARRAY**//
let family = createArray()
family.addElement("Mark")
console.log(family.getArray())
family.addElement("Caroline")
console.log(family.getArray())
family.addElement("Dad")
console.log(family.getArray())
family.addElement("Mom")
console.log(family.getArray())


//**I'M ABLE TO FILTER AND ITERATE THROUGH THE ARRAY**//
function findMe(familyObj) {
    const familyArray = familyObj.getArray();

    for(let i = 0; i < familyArray.length; i++) {
        if (familyArray[i] === "Mark") {
            console.log("That's me!")
        }
        else (console.log("That ain't me!"))
    }
}

findMe(family);