const form = document.getElementById('contactForm');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const societe = document.getElementById('societe');
const voterMessage = document.getElementById('voterMessage');


const checkValidation = () => {
    validateInputs()

}

const validateInputs = () => {
    const nomValue = nom.value.trim()
    const prenomValue = prenom.value.trim()
    const emailValue = email.value.trim()
    const telephoneValue = telephone.value.trim()
    const societeValue = societe.value.trim()
    const voterMessageValue = voterMessage.value.trim()

    if (nomValue == '') {
        changeError(nom, 'Nom is required')
    } else {
        changeSucess(nom)
    }
    if (prenomValue == '') {
        changeError(prenom, 'Prenom is required')
    } else {
        changeSucess(prenom)
    }
    if (societeValue == '') {
        changeError(societe, 'societe is required')
    } else {
        changeSucess(societe)
    }
    if (voterMessageValue == '') {
        changeError(voterMessage, 'voter Message is required')
    } else {
        changeSucess(voterMessage)
    }
    if (emailValue == '') {
        changeError(email, 'email is required')
    } else {

    }
    if (emailValue === '') {
        changeError(email, 'Email is required');
    } else if (!validEmail(emailValue)) {
        changeError(email, 'Provide a valid email address');
    } else {
        changeSucess(email);
    }
    if (telephoneValue.length < 10) {
        changeError(telephone, 'Phone is 10 Digit Number');
    } else if (!validPhone(telephoneValue)) {
        changeError(telephone, 'Provide a valid Phone number Format');
    } else {
        changeSucess(telephone);
    }
}

const changeError = (element, message) => {
    const inputValue = element.parentElement;
    const errorValue = inputValue.querySelector('.error')

    errorValue.innerText = message
    inputValue.classList.add('error')
    inputValue.classList.remove('success')
}

const changeSucess = (element) => {
    const inputValue = element.parentElement;
    const errorValue = inputValue.querySelector('.error')

    errorValue.innerText = ''
    inputValue.classList.add('success')
    inputValue.classList.remove('error')
}

const validEmail = (email) => {
    const rexValue = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return rexValue.test(String(email).toLowerCase());
}

const validPhone = (phone) => {
    const rexValue = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return rexValue.test(phone);
}


$(document).ready(function() {
    $('.logo-carousel').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        }

    );
});

$(document).ready(function() {
    $('.header-carousel').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        }

    );
});