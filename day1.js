
// Read text file
var fs = require('fs');
fs.readFile('calories.txt', 'utf8', function(err, data){

    // Declare variables
    let dataArr = [];
    let elfArr = [];
    let calories = 0;
    let mostCalories = 0;
    let top3 = [];
    let index = 0;
    
    // Parse text file using delimiter
    dataArr = data.split('\n');

    // Add each line together until return is reached, signifying next Elf
        // Push total into elfArr
    for(let i = 0; i < dataArr.length; i++) {

        if(dataArr[i] != '\r') {
            calories += +dataArr[i];
        }
        else {
            elfArr.push(calories);
            calories = 0;
        }
    }
    
    // Through each iteration (3 total) through elfArr, the highest total is stored in mostCalories
        // The value at that index is then removed from elfArr and mostCalories is reset to 0
    for (let j = 0; j < 3; j++) {
        for(let i = 0; i < elfArr.length; i++) {
            if(elfArr[i] > mostCalories) {
                mostCalories = elfArr[i];
                index = i;
            }
        }
        elfArr.splice(index, 1);
        top3.push(mostCalories);
        mostCalories = 0;
    }

    console.log("Total calories held by the Elf carrying the most calories: " + top3[0]);
    console.log("Total calories held by the top three Elves carrying the most calories: " + top3);

});