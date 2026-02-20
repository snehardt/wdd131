const form = document.querySelector('#creditCardForm');

form.addEventListener('submit', validateForm);
function validateForm(event) {
    event.preventDefault();
    let errorMsg = '';
    
    const cardNum = document.querySelector('#creditCardNumber').value.trim()
    const month = Number(document.querySelector('#month').value);
    const year = Number(document.querySelector('#year').value);
    
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    if (cardNum.length !== 16) {
    errorMsg += 'Card number must be 16 digits\n';
    } else if (cardNum !== '1234123412341234') {
      errorMsg += 'Card number is not valid\n';
    }

    if (
        year < currentYear ||
        (year === currentYear && month < currentMonth)
    ) {
        errorMsg += 'Card is expired\n';
    }


    if (errorMsg !== '') {
        alert(errorMsg)
        return;
    }

    form.innerHTML = '<h2>Payment Successful!</h2>';
}
