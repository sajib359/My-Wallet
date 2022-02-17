let income = document.getElementById('input-num');
let food =document.getElementById('exp-food');
let rent = document.getElementById('exp-rent');
let transport = document.getElementById('exp-transport');

console.log("all done");

function calculate(){
    if(income!= 0 && income!= -1){
console.log('gygjg')
        let balance = parseFloat(income.value) - parseFloat(food.value) - parseFloat(rent.value) - parseFloat(transport.value); 
        console.log(balance);

        let totalExp = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(transport.value);
        document.getElementById('bal').innerText = balance;
        document.getElementById('exp').innerText=totalExp;
    }
    else{
        console.log("your balance can't negative or zero... plz enter your balance");
    }
}

document.getElementById('cal-btn').addEventListener('click',function () {

    calculate();

})


let saveInput = document.getElementById('save-input');
let saveCal = document.getElementById('save-btn');

function saveCalculation (){
    if(balance!=0 && balance!=-1){
        let savings = parseInt(balance) /  parseInt(saveInput.value)*100;
        document.getElementById('interest').innerText = savings;
    }
}

document.getElementById('save-btn').addEventListener('click',function(){

})