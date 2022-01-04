//top

const loanAmount = document.querySelector('#loan-amount input');
const interest = document.querySelector('#interest input');
const yearsToRepay = document.querySelector('#years-to-repay');
const calculateBtn = document.querySelector('#calculate');

//bottom

const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');

//delay and results variables
const bottom = document.querySelector('#bottom');
const resultsContainer = document.querySelector('#results-container');
const loadingContainer = document.querySelector('#loading-container');

//logic
calculateBtn.addEventListener('click', calculate);

function calculate () {
    const interestAmountR = (parseFloat(loanAmount.value) * (parseFloat(interest.value)/100) * parseFloat(yearsToRepay.value));
    const totalPaymentR = parseFloat(loanAmount.value) + interestAmountR;
    const monthlyPaymentR = totalPaymentR / (parseFloat(yearsToRepay.value) * 12);

    monthlyPayment.innerHTML = `${monthlyPaymentR}`;
    totalPayment.innerHTML = `${totalPaymentR}`;
    totalInterest.innerHTML = `${interestAmountR}`;

    bottom.style.display = 'inline-block';
    loadingContainer.style.display = 'flex';

    setTimeout(displayResults, 3200);
}

//delay and results logic

function displayResults () {
    resultsContainer.style.display = 'flex';
    loadingContainer.style.display = 'none';
}