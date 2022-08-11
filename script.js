// toggle nav menu open and closed
const primaryNav = document.getElementById('primary-navigation');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', function () {
    primaryNav.classList.toggle('active');
})


// toggles accordion menus open and closed on click
const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', function () {
        accordionItemHeader.classList.toggle('active-accordion');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains('active-accordion')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        }
        else {
            accordionItemBody.style.maxHeight = '0';
        }
    });
});


// get button elements
const seeAllBtn = document.getElementById('seeAllBtn');
const seeSunBtn = document.getElementById('seeSunBtn');
const seeShadeBtn = document.getElementById('seeShadeBtn');
const seeHumidBtn = document.getElementById('seeHumidBtn');
const seeEasyBtn = document.getElementById('seeEasyBtn');

// get array of buttons
const buttons = document.getElementsByClassName('btn-sort');

// get array of plant cards
const plantCards = document.getElementsByClassName('card');


// removes the hidden class from all elements upon click of 'see all'
seeAllBtn.addEventListener('click', function () {
    for (i=0; i < buttons.length; i++) {
        buttons[i].classList.remove('clicked');
    }
    seeAllBtn.classList.add('clicked');
    for (i=0; i < plantCards.length; i++){
        plantCards[i].classList.remove('hidden');
    }
});

// sets all elements without the 'sun' class to hidden
seeSunBtn.addEventListener('click', function () {
    for (i=0; i < buttons.length; i++) {
        buttons[i].classList.remove('clicked');
    }
    seeSunBtn.classList.add('clicked');
    for (i=0; i < plantCards.length; i++){
        if (plantCards[i].classList.contains('sun')) {
            if (plantCards[i].classList.contains('hidden')) {
                plantCards[i].classList.remove('hidden');
            }
        }
        if (plantCards[i].classList.contains('sun') == false) {
            if (plantCards[i].classList.contains('hidden') == false) {
                plantCards[i].classList.add('hidden');
            }
        }
    }
});

// sets all elements without the 'shade' class to hidden
seeShadeBtn.addEventListener('click', function () {
    for (i=0; i < buttons.length; i++) {
        buttons[i].classList.remove('clicked');
    }
    seeShadeBtn.classList.add('clicked');
    for (i=0; i < plantCards.length; i++){
        if (plantCards[i].classList.contains('shade')) {
            if (plantCards[i].classList.contains('hidden')) {
                plantCards[i].classList.remove('hidden');
            }
        }
        if (plantCards[i].classList.contains('shade') == false) {
            if (plantCards[i].classList.contains('hidden') == false) {
                plantCards[i].classList.add('hidden');
            }
        }
    }
});

// sets all elements without the 'humid' class to hidden
seeHumidBtn.addEventListener('click', function () {
    for (i=0; i < buttons.length; i++) {
        buttons[i].classList.remove('clicked');
    }
    seeHumidBtn.classList.add('clicked');
    for (i=0; i < plantCards.length; i++){
        if (plantCards[i].classList.contains('humid')) {
            if (plantCards[i].classList.contains('hidden')) {
                plantCards[i].classList.remove('hidden');
            }
        }
        if (plantCards[i].classList.contains('humid') == false) {
            if (plantCards[i].classList.contains('hidden') == false) {
                plantCards[i].classList.add('hidden');
            }
        }
    }
});

// sets all elements without the 'easy' class to hidden
seeEasyBtn.addEventListener('click', function () {
    for (i=0; i < buttons.length; i++) {
        buttons[i].classList.remove('clicked');
    }
    seeEasyBtn.classList.add('clicked');
    for (i=0; i < plantCards.length; i++){
        if (plantCards[i].classList.contains('easy')) {
            if (plantCards[i].classList.contains('hidden')) {
                plantCards[i].classList.remove('hidden');
            }
        }
        if (plantCards[i].classList.contains('easy') == false) {
            if (plantCards[i].classList.contains('hidden') == false) {
                plantCards[i].classList.add('hidden');
            }
        }
    }
});



