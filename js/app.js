let income = document.getElementById('input-num').value;
let food =document.getElementById('exp-food').value;
let rent = document.getElementById('exp-rent').value;
let transport = document.getElementById('exp-transport').value;

console.log("all done");

function calculate(){
    if(income!==0 && income!== -1){
        console.log('dhukche')
        console.log(income);
        console.log(food);
        console.log(rent);
        console.log(transport);

        let balance = parseFloat(income) - parseFloat(food) - parseFloat(rent) - parseFloat(transport); //income-(food+rent+transport);
        console.log(balance);
    }
    else{
        console.log("your balance can't negative or zero... plz enter your balance");
    }
}

document.getElementById('cal-btn').addEventListener('click',function () {

    calculate();
})