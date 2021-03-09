function tipJudger(mealCost, tipGiven) {
    let tipPercent = mealCost * (tipGiven/100),
        judgement = "";
 console.log(tipPercent);

    // if (tipPercent < 6 && tipPercent > 0) {
    //     judgement += "You are an awful tipper!";
    // } 
    // else if (tipPercent < 11 && tipPercent > 5) {
    //     judgement += "You are a okay tipper";
    // }
    // else if (tipPercent < 21 && tipPercent > 12) {
    //     judgement += "You are an good tipper";
    // }
    // else {
    //     judgement += "You are generous tipper";
    // }

    // return judgement;

    // }

    if (tipPercent > 20) {
        judgement += "You are a GREAT tipper!";
    } 
    else if (tipPercent < 20 && tipPercent > 10) {
        judgement += "You are a GENEROUS tipper";
    }
    else if (tipPercent < 11 && tipPercent > 5) {
        judgement += "You are an OKAY tipper";
    }
    else {
        judgement += "You are an AWFUL tipper";
    }

    return judgement;

    }

console.log(tipJudger(100, 5));