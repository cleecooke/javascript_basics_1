// Excercise 1
var numbers = [10, 20, 30, 40, 50];     // var should be at top?  This is an array of 5,  --> 0, 1, 2, 3, 4

function addInt(numbers) {          
    let length = numbers.length,    // establish a variable, *Sumit*: eleoquent doc says to use
        sum = 0,                    // "let" for "local scope" rather than "var" as we have in
        i = 0;                      // class, so is this okay?  Also, used numbers.length here
                                    // because it measures array length once rather than 5 times below?

    for (i; i < length; i += 1) {   // use "i += 1" better than i++ ?
        sum += numbers[i];          
    }

    return sum;
}

/* MENOTES: i (starts at 0); 0 is less than the numbers.length (which is an array of 5)
            js reads right to left (WTF? ) so first run through "i += 1" is effectively
            ignored... numbers[0] is 10, so it adds that to some, which is now 10... the
            seconds through it addes one to numbers.length to make "i" 1 (still less than 5)
            so now it is numbers[1] (SECOND spot in the array) which is 20 , adding to sum... 

*/ 



// console.log(addInt(numbers));


// ************************************************************************************************************************************************************




// Excercise 2

var array1 = [0,1,2,3,4,5,6,7,8,9,10];

function revArray(array1) {
    let i = (array1.length - 1),        // set length of array (which is 11 long) to be 10
        reversed = [],                  // create a place to put numbers after pushing it
        stop = -1;                      // in a nested loop.  set "stop" to be lower than the
                                        // array (which starts at 0?)
    for (i; i > stop; i -= 1) {
        reversed.push(array1[i]);       // "i" is 10, greater than "stop"'s -1, so it runs
    }                                   // and it grabs 10 (11th spot in array) putting it
                                        // into first spot of empty array created above, then
    return reversed;                    // repeats until "i" is not greater than -1
}

//console.log(revArray(array1));


// ************************************************************************************************************************************************************




// Excercise 3

function fizzBuzz() {                               // 
    let message = "",
    //    trimmed = "",                             // do I need this... change?
        i = 1,
        match = false;


    for (i; i < 101; i += 1) {                      // 1 is less than 101, so run, then...
        if (i % 3 === 0) {                          // if remainder modulus result is exactly 0
            message += "fizz";                      // this would be div. by 3, so then concat 
            match = true;                           // empty string above with fizz
        }

        if (i % 5 === 0) {                          // as above, but modulus div by 5, if above
            message += "buzz";                      // if is true, then it should create a 
            match = true;                           // "fizzbuzz" ?
        }

        if (!match) {                        // initially tried just "(match)" ahhh!
            message += i.toString(10);      // "radix"
        }

        match = false;              // equals a false so I can  reset match
        message += ", ";
    }

   // trimmed = message.slice(-1, 2);                       // not working how I want
    return message.slice(0, (message.length - 2));
}

// console.log(fizzBuzz());



// ************************************************************************************************************************************************************



// Challenge

function trentManson() {
    let star = "*",
        row = 1,
        message = "",
        col;                    // most languages: declare variables at top of scope

    for (row; row < 6; row += 1) {
        col = 0;
        
        for (col; col < row; col += 1) {
            message += star;
        }
        
        message += "\n";
    }

    return message;
}

console.log(trentManson());