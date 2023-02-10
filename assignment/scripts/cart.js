console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(newItem){//function with param1/argument
    basket.push(newItem);//adds new items to array 'basket
    console.log(`added ${newItem} to the list`);//to console log addition of each item
    return true;//returns true after each item added. 
}

console.log(addItem('bread'));//adding first new item

console.log(basket);//checking array after adding the new item

console.log(addItem('milk'));//adding second item

console.log(addItem('bacon','tomato', 'lettuce','cheese')); //adding more iteams
//would only let me add one at a time. :(

/* First function called "addIteam" must: 
    -take an input parameter for a string item
    -add the new item to the global array basket
    -return true indicating the item was added*/

    console.log('***LIST FUNCTION***');

    
    
    function listItems(){
        for(let item of basket){
            console.log(item);
        }//using 'for of' loop to log basket items individually on each line
    }// end listItems function
   
    console.log(listItems());//tested/"call on function"

    console.log('***EMPTY FUNCTION***')

    

/*  Create a function called listItems. It should:
        -loop over the items in the basket array
        -console.log each individual item on a new line

    Create a function called empty. It should:
        -reset the basket to an empty array*/
    
function empty(){
    basket.length = 0;//setting basket array length to 0 to clear everything
    console.log('reseting basket to 0')
}

console.log(empty());//tested in console


console.log(basket);

