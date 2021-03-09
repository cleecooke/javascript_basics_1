// grades
/*
var jennysGrade  = 54;

if (jennysGrade > 90) {
    console.log("That's an A Jenny!");
} else if (jennysGrade > 79) {
    console.log("Jenny got a B!");
} else if (jennysGrade > 69) {
    console.log("That's a passing C!");
} else if (jennysGrade > 59) {
    console.log("Only a D, you can do better!");
} else if (jennysGrade < 60) {
    console.log("An F! You failed!");
}
*/


function getGrade(grade) {
    let response = "Student received an ";
    
    if (grade > 89 ) {
        response += "A" + getSymbol(grade);     // javascript reads right to left!
    } else if (grade > 79) {
        response += "B" + getSymbol(grade);
    } else if (grade > 69) {
        response += "C" + getSymbol(grade);
    } else if (grade > 59) {
        response += "D" + getSymbol(grade);
    } else {
        response += "F";
    }

//    if (grade > 59) {                         //not using this block, prevents
//        response += getSymbol(grade);         // an additional test, so although
//    }                                         // additional characters used (above) 
                                                // it ends the need for the repeated call
    return response;
}

function getSymbol(grade) {
    let digit = grade % 10, 
    symbol = "";
    
    if (digit > 6) {
        symbol = "+";
    } else if (digit < 4) {
        symbol = "-";
    }

    return symbol;
}

console.log(getGrade(78));