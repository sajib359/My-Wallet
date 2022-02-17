let incomeInput = document.getElementById('input-num');
let foodInput = document.getElementById('exp-food');
let rentInput =document.getElementById('exp-rent');
let clothInput =document.getElementById('exp-cloth');
let saveInput = document.getElementById('save-input');


//income or expense validation

function validInput(){
    console.log(incomeInput.value)
    if(incomeInput.value > 0 ){
        document.getElementById('income-alt').style.display='none';
    } else {
        document.getElementById('income-alt').style.display='block';
    }
    if(foodInput.value > 0 ){
        document.getElementById('food-alt').style.display='none';
    } else {
        document.getElementById('food-alt').style.display='block'; 
      }
    if(rentInput.value > 0 ){
        document.getElementById('rent-alt').style.display='none';
    } else {
        document.getElementById('rent-alt').style.display='block';    }
    if(clothInput.value > 0 ){
        document.getElementById('cloth-alt').style.display='none';
    } else {
        document.getElementById('cloth-alt').style.display='block';    }
}


// calculation button function

 document.getElementById('cal-btn').addEventListener('click',function(){
    validInput();
    if ( parseFloat(incomeInput.value) < 0 || parseFloat(foodInput.value) <0 || parseFloat(rentInput.value) <0 || parseFloat(clothInput.value) <0 ){
       console.log('this not valid')
    } else{
        
     let balance = parseFloat(incomeInput.value) - parseFloat(foodInput.value) - parseFloat(rentInput.value) -parseFloat(clothInput.value);

    document.getElementById('balance').innerText = balance;

    let expense = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothInput.value);

    document.getElementById('exp').innerText = expense;
    }
    
 })
// savings section start

 function savingsvalid(){
    if(saveInput.value > 0 ){
        document.getElementById('save-alt').style.display='none';
    } else {
        document.getElementById('save-alt').style.display='block';
    }

 }

 document.getElementById('save-btn').addEventListener('click' , function(){
     console.log('hhjk')
     savingsvalid();
     if(saveInput.value > 0 ){
        console.log('this not valid')
     }
     else{
         let interest = (parseFloat(saveInput.value)/100) * parseFloat (incomeInput.value);
         document.getElementById('interest').innerText=interest;
         let remaining = balance-interest;
         document.getElementById('remain').innerText = remaining;

     }

 })