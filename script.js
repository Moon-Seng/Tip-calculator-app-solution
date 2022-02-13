let bill = document.getElementById('bill');
let NumberOfPeople = document.getElementById('NumberOfPeople');
let tipAmountPerPerson = document.getElementById("tipAmount");
let totalAmountPerPerson = document.getElementById('totalAmount')
let tips = document.querySelectorAll(".tips");



bill.addEventListener('input' , billInputFunction);
NumberOfPeople.addEventListener('input' , PeopleInputFunction);
tips.forEach(function(val){
    val.addEventListener('click',handClick)
})



bill.value = '0.0';
NumberOfPeople.value = 1;


let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function billInputFunction(){
    billValue = parseFloat(bill.value);
    calculateTip()
}

function PeopleInputFunction(){
    peopleValue = parseFloat(NumberOfPeople.value);
    calculateTip()
}

function handClick(event){
    tips.forEach(function(val){
        val.classList.remove('active-tip')
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add('active-tip')
            
            tipValue = val.innerHTML
            tipInNumber = tipValue.match(/\d+/)[0]
            tipValue = tipInNumber/100
        }
    });
    calculateTip()
}

function calculateTip(){
    if(peopleValue >= 1){
        let tipAmount = (billValue * tipValue) / peopleValue;
        let totalAmount = (billValue + tipAmount) / peopleValue;
        tipAmountPerPerson.innerHTML = '$'+(tipAmount).toFixed(2);
        totalAmountPerPerson.innerHTML = '$'+(totalAmount).toFixed(2);

    }
}








