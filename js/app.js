let incomeField = document.getElementById('input-num');
let foodField = document.getElementById('exp-food');
let rentField = document.getElementById('exp-rent');
let transportField = document.getElementById('exp-transport');
let saveField = document.getElementById('save-btn');

function checkInput() {
    if (isNaN(parseFloat(incomeField.value))) {
        document.getElementById("income-alt").style.display = "block";
    } else {
        document.getElementById("income-alt").style.display = "none";
    }
    // checking food field 
    if (isNaN(parseFloat(foodField.value))) {
        document.getElementById("food-alt").style.display = "block";
    } else {
        document.getElementById("food-alt").style.display = "none";

    }
    // checking rent field 
    if (isNaN(parseFloat(rentField.value))) {
        document.getElementById("rent-alt").style.display = "block";
    } else {
        document.getElementById("rent-alt").style.display = "none";
    }
    // checking cloth field 
    if (isNaN(parseFloat(transportField.value))) {
        document.getElementById("transport-alt").style.display = "block";
    } else {
        document.getElementById("transport-alt").style.display = "none";
    }

    // end calculation if any number error 
    if(isNaN(parseFloat(incomeField.value)) || isNaN(parseFloat(foodField.value)) || isNaN(parseFloat(rentField.value)) || isNaN(parseFloat(transportField.value))){
        return false;
    } else{
        return true;
    }

}

function checkSave() {
    // checking saving ammount field 
    if (isNaN(parseFloat(saveField.value))) {
        document.getElementById("saveWarn").style.display = "block";
        return false;
    } else {
        document.getElementById("saveWarn").style.display = "none";
        return true;
    }
}

document.getElementById('cal-btn').addEventListener('click',function(){
    checkInput();
    if(checkInput() == true){
    let balance = parseFloat(incomeField.value) - parseFloat(foodField.value) - parseFloat(rentField.value) - parseFloat(transportField.value);
     console.log(balance);
     let totalExp = parseFloat(foodField.value) + parseFloat(rentField.value) + parseFloat(transportField.value);
     document.getElementById('bal').innerText = balance;
     document.getElementById('exp').innerText=totalExp; 
    }
})