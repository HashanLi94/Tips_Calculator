function tipCalculator(bill){
    var pecentage;
    if(bill < 50){
        pecentage = 0.2;
    }else if(bill > 50 && bill < 200){
        pecentage = 0.15;
    }else{
        pecentage = 0.1;
    }

    return pecentage * bill;
}

console.log("The tip is " + tipCalculator(100));

var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

console.log(tips);   

var full = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(full);
