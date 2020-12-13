
const mathjs = require('mathjs')//math functions

const test = "hello";//question
const test2 = "hi";//anserew

function Builderbot() {//builds the bots
    const top = 100000;//top complexedy
    const bot = 1;//smallest complexedy
    const complex = random(bot, top)
    function randlist(comple, top, bot, chartrue) {
        var list = [];//setup list
        var char = [];//if charicter list
        var key = [];//if charicter list
        for (i = 0; i < comple; i++) {
            list.push(random(top, bot));//add random to list
            if (chartrue) {
                char.push(random(126, 32));//add random charicter to list
                key.push(random(test.length, 1));//add random charicter to list
            }
        }
        if (chartrue) {
            return [char, key, list]//gives both lists
        } else {
            return list;//give list
        }

    }
    return (array = [randlist(complex, complex, 0, true), randlist(complex, complex, 0, false), randlist(complex, 126, 32, false)]);
    function random(low, high) {
        return Math.round(Math.random() * (high - low) + low)//rnd
    }
}
function runbot(array) {//runs builderbots models
    var dictionamount = {};//how many +1 each noron has
    var dictionamount2 = {};//how many +1 each noron has
    for (e = 0; e < array[0][0].length; e++) {
        if (String.fromCharCode(array[0][0][e]) == test.split("")[array[0][1][e]]) {//first layer
            if (dictionamount[array[0][2][e]] == null) {
                dictionamount[array[0][2][e]] = 1;
            } else {
                dictionamount[array[0][2][e]]++;
            }
        } else {
            if (dictionamount[array[0][2][e]] == null) {
                dictionamount[array[0][2][e]] = -1;
            } else {
                dictionamount[array[0][2][e]]--;
            }
        }
    }

    for (var key in dictionamount) {//second layer
        if (dictionamount[key] > 0) {
            if (dictionamount2[array[1][key]] == null) {
                dictionamount2[array[1][key]] = dictionamount[key];
            } else {
                dictionamount2[array[1][key]] + dictionamount[key];
            }
        } else {
            if (dictionamount2[array[1][key]] == null) {
                dictionamount2[array[1][key]] = dictionamount[key];
            } else {
                dictionamount2[array[1][key]] + dictionamount[key];
            }
        }
    }
    var output = [];
    for (var key in dictionamount2) {//number to text
        if (dictionamount2[key] > 0) {
            output.push(String.fromCharCode(array[2][key]));
        }

    }
    return output;
}





trainbot(1, 100)
function trainbot(rounds, perround) {
    var bots = []
    var score = []
    for (a = 0; perround > a; a++) {
        var scoree = 0
        bots.push(Builderbot())
        if (runbot(bots[a]).length < test2.length + 5 && runbot(bots[a]).length > test2.length - 5) {
            scoree = scoree + 5;
        }
        else {
            scoree = scoree - (runbot(bots[a]).length - test2.length)
            //console.log(scoree)
        }
        score.push(scoree - getDifference(runbot(bots[a]).join(""), test2).split("").length)
        //console.log(runbot(bots[a]).join(""))
        //console.log(score[a])
    }
    var largest = score[1];
    var largestid = 0;
    for (b = 0; b < score.length; b++) {
        //console.log(score[b])
        if (score[b] > largest) {
            //console.log(b)
            var largest = score[b];
            var largestid = b;
        }
    }
    console.log(largest);
    console.log(runbot(bots[largestid]).join(""));
    for (e = 0; e < rounds; e++) {
        
    }
    function getDifference(a, b) {
        var i = 0;
        var j = 0;
        var result = "";

        while (j < b.length) {
            if (a[i] != b[j] || i == a.length)
                result += b[j];
            else
                i++;
            j++;
        }
        return result;
    }
}
