const calculateBtn = document.querySelector('#calculate');
const principalInputEle = document.querySelector('.principal input');
const interestInputEle = document.querySelector('.interest-rate input');
const yearsInputEle = document.querySelector('.years input');
const monthInputEle = document.querySelector('.months input');
const frequencySelectEle = document.querySelector('#time');

calculateBtn.addEventListener('click', () => {
    inputEmptyChecker();
    calculateInterest();
})

function calculateInterest() {
    const principalValue = Number(principalInputEle.value);
    const interestValue = Number(interestInputEle.value) / 100;
    const yearsValue = Number(yearsInputEle.value);
    const monthsValue = Number(monthInputEle.value);
    const frequencyValue = frequencySelectEle.value;
    const compoundInterest = principalValue * interestValue;

    console.log(`The principal value is: ${principalValue}`)
    console.log(`The interest rate is ${interestValue}`)
    console.log(`The frequency is ${frequencyValue}`)


    if (frequencyValue === 'annually') {
        console.log(`The compound interest for ${yearsValue} years is ${(compoundInterest * yearsValue)}`)
    } else if (frequencyValue === 'semiannually') {
        console.log(`The compound interest semiannually is ${compoundInterest * (yearsValue * 2)}`)
    } else if (frequencyValue === 'quarterly') {
        console.log(`The compound interest quarterly is ${compoundInterest * (yearsValue * 4)}`)
    } else {
        console.log(`The compound interest monthly is ${compoundInterest * (yearsValue * 12 + monthsValue)}`)
    }
}

// look into logic for checking 
function inputEmptyChecker() {
    if (principalInputEle.value === '' || interestInputEle.value === '') {
        alert('Please enter in a Principal Amount and Interest Rate')
    }
}