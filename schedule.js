const pickUpOnly = document.getElementById('pickup-only');
const pickUpDelivery = document.querySelector('#pickup-delivery');
const form = document.querySelector('#form');
pickUpOnly.addEventListener('click', renderForm);
pickUpDelivery.addEventListener('click', renderForm);


function renderForm(e){

    console.log(`${e.target.textContent} has been clicked`);
    
}

