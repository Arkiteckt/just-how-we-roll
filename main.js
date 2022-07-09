/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}
/*******************
 * YOUR CODE BELOW *
 *******************/


/*******************
 * QUERY SELECTORS *
 *******************/

//d6
//let buttond6 = document.querySelector("#d6-button");
let image_d6 = document.querySelector("#d6-roll");
let mean_d6 = document.querySelector("d6_mean_rolls");
let median_d6 = document.querySelector("d6-rolls-median")

//double6
let doubleD6buttond6 = document.querySelector("#double-d6-buttons");
let image_doubleD6One = document.querySelector("#double-d6-roll-1");
let image_doubleD6Two = document.querySelector("#double-d6-roll-2");
let mean_doubleD6 = document.querySelector("#double-d6-rolls-mean");
let median_doubleD6 = document.querySelector("#double-d6-rolls-median");


//d12
let d12Buttond = document.querySelector("#d12-button");
let image_d12 = document.querySelector("#d12-roll");
let mean_d12 = document.querySelector("d12_mean_rolls");


//d20
let d20Button = document.querySelector("#d20-button");
let image_d20 = document.querySelector("#d20-roll");
let mean_d20 = document.querySelector("d20_mean_rolls");
let median_d20 = document.querySelector("#d20-rolls-median");


let resetButton = document.querySelector('#reset-button');


/*******************
 * EVENT LISTENERS *
 *******************/
image_d6.addEventListener('click', d6RollFunction);

doubleD6buttond6.addEventListener('click', doubleD6OneRollFunction);
doubleD6buttond6.addEventListener('click', doubleD6TwoRollFunction);

d12Buttond.addEventListener('click', d12RollFunction);

d20Button.addEventListener('click', d20RollFunction);



resetButton.addEventListener('click', resetFunction);


/******************
 * RESET FUNCTION *
 ******************/
resetFunction();
 function resetFunction(){
    console.log("Reset Button clicked!");
//Empty all global roll arrays
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];
image_d6.src = "./images/start/d6.png";
image_doubleD6One.src = "./images/start/d6.png"; 
image_doubleD6Two.src = "./images/start/d6.png"; 
image_d12.src = "./images/start/d12.jpeg"; 
image_d20.src = "./images/start/d20.jpg";  //this is how we access our images folder
//change text in our mean areas to N/A

mean_d6.innerText = "N/A";
}



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function d6RollFunction(){
    let result = getRandomNumber(6);
    console.log(result);

    if(result === 1){
        image_d6.src = "./images/d6/1.png";
    }else if (result === 2){
        image_d6.src = "./images/d6/2.png";
    }else if (result === 3){
        image_d6.src = "./images/d6/3.png";

    }else if (result === 4){
        image_d6.src = "./images/d6/4.png";
    }else if (result === 5){
        image_d6.src = "./images/d6/5.png";
    }else if(result === 6){
        image_d6.src = "./images/d6/6.png";
        }
}

sixes.push(result);
console.log(sixes);

function doubleD6One6RollFunction(){
    let result = getRandomNumber(6);
    console.log(result);

    if(result === 1){
        image_doubleD6One.src = "./images/d6/1.png";
    }else if (result === 2){
        image_doubleD6One.src = "./images/d6/2.png";
    }else if (result === 3){
        image_doubleD6One.src = "./images/d6/3.png";

    }else if (result === 4){
        image_doubleD6One.src = "./images/d6/4.png";
    }else if (result === 5){
        image_doubleD6One.src = "./images/d6/5.png";
    }else if(result === 6){
        image_doubleD6One.src = "./images/d6/6.png";
        }
        doubleSixes.push(result);
        console.log(doubleD6.innerText = getMedian (doubleSixes))
}



function doubleD6Two6RollFunction(){
    let result = getRandomNumber(6);
    console.log(result);

    if(result === 1){
        image_doubleD6Two.src = "./images/d6/1.png";
    }else if (result === 2){
        image_doubleD6Two.src = "./images/d6/2.png";
    }else if (result === 3){
        image_doubleD6Two.src = "./images/d6/3.png";

    }else if (result === 4){
        image_doubleD6Two.src = "./images/d6/4.png";
    }else if (result === 5){
        image_doubleD6Two.src = "./images/d6/5.png";
    }else if(result === 6){
        image_doubleD6Two.src = "./images/d6/6.png";
        }
        doubleSixes.push(result);
        console.log(doubleD6.innerText = getMedian (doubleSixes))
}



function d12RollFunction(){
    let result = getRandomNumber(12);
    console.log(result);

    if(result === 1){
        image_d12.src = "./images/numbers/1.png";
    }else if (result === 2){
        image_d12.src = "./images/numbers/2.png";
    }else if (result === 3){
        image_d12.src = "./images/numbers/3.png";

    }else if (result === 4){
        image_d12.src = "./images/numbers/4.png";
    }else if (result === 5){
        image_d12.src = "./images/numbers/5.png";
    }else if(result === 6){
        image_d12.src = "./images/numbers/6.png";
    }else if(result === 7){
        image_d12.src = "./images/numbers/7.png";
    }else if(result === 8){
        image_d12.src = "./images/numbers/8.png";
    }else if(result === 9){
        image_d12.src = "./images/numbers/9.png";
    }else if(result === 10){
        image_d12.src = "./images/numbers/10.png";
    }else if(result === 11){
        image_d12.src = "./images/numbers/11.png";
    }else if(result === 12){
        image_d12.src = "./images/numbers/12.png";
    }
}

    twelves.push(result);
    console.log(twelves);

    function d20RollFunction(){
        let result = getRandomNumber(12);
        console.log(result);
    
        if(result === 1){
            image_d20.src = "./images/numbers/1.png";
        }else if (result === 2){
            image_d20.src = "./images/numbers/2.png";
        }else if (result === 3){
            image_d20.src = "./images/numbers/3.png";
    
        }else if (result === 4){
            image_d20.src = "./images/numbers/4.png";
        }else if (result === 5){
            image_d20.src = "./images/numbers/5.png";
        }else if(result === 6){
            image_d20.src = "./images/numbers/6.png";
        }else if(result === 7){
            image_d20.src = "./images/numbers/7.png";
        }else if(result === 8){
            image_d20.src = "./images/numbers/8.png";
        }else if(result === 9){
            image_d20.src = "./images/numbers/9.png";
        }else if(result === 10){
            image_d20.src = "./images/numbers/10.png";
        }else if(result === 11){
            image_d20.src = "./images/numbers/11.png";
        }else if(result === 12){
            image_d20.src = "./images/numbers/12.png";
        }else if(result === 13){
            image_d20.src = "./images/numbers/13.png";
        }else if(result === 14){
                image_d20.src = "./images/numbers/14.png";
        }else if(result === 15){
            image_d20.src = "./images/numbers/15.png";
        }else if(result === 16){
            image_d20.src = "./images/numbers/16.png";
        }else if(result === 17){
            image_d20.src = "./images/numbers/17.png";
        }else if(result === 18){
            image_d20.src = "./images/numbers/18.png";
        }else if(result === 19){
            image_d20.src = "./images/numbers/19.png";
        }else if(result === 20){
            image_d20.src = "./images/numbers/20.png";
        
        twenties.push(result);
        console.log(twenties);
        
        
        }   
        
            
        





 doubleSixes.push(result);
 console.log(doubleD6.innerText = getMedian (doubleSixes))
 }

/****************
 * MATH SECTION *
 ****************/
