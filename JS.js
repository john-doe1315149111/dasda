window.onload = function() {
    window.scrollTo(0, 0);
};

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const popArtAlerts = document.querySelectorAll('.pop-art-alert');

function showPopArtAlert(event) {
    const alertBox = event.target.nextElementSibling;

    alertBox.style.display = 'block';

    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 1500);
}

addToCartButtons.forEach(button => {
    button.addEventListener('click', showPopArtAlert);
});