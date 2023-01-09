const form = document .querySelector('form')
form.addEventListener('submit',handelsubmit)

function handelsubmit(e){
e.preventDefault()
handelUsername(username)
form.reset()
}


const input = document.querySelectorAll('input')
const src = "ressources/error.svg"

   
    const username = input[0]
    const imgError = document.querySelectorAll('img')
    const ErroMessage = document.querySelectorAll('.erroUsername')
    
    username.addEventListener('keydown',() =>{

        const numberOfLetters = username.value.replace(/[^a-z]/gi, "").length
    if (numberOfLetters < 2) {
        imgError[0].src="ressources/error.svg"
        imgError[0].style.display="block"
        ErroMessage[0].textContent="Choisissez un pseudo contenant au moins 3 caractères."
        
    }
        else  {
        imgError[0].src="ressources/check.svg"
        imgError[0].style.display="block"
        ErroMessage[0].textContent=""
        }
              
    })


    const email = input[1]
    const emailMessage = document.querySelector('.errorEmail')

    
    email.addEventListener('keydown',()=>{

    function isValidEmail(email){
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

    }     
    if (isValidEmail(email.value)){
        imgError[1].src="ressources/check.svg"
        imgError[1].style.display="block"
        emailMessage.textContent=""
    }
        else  {
            imgError[1].src="ressources/error.svg"
            imgError[1].style.display="block"
            emailMessage.textContent="Rentrez un email valide."
              
    }
})


const password = input[2]
const passwordLevel1 = document.querySelector('.l1')
const passwordLevel2 = document.querySelector('.l2')

password.addEventListener('keydown',()=>{
    let regex = /^.{0,}$/
    let regexNumber =/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]+$/;
if(regex.test(password.value)){  
passwordLevel1.style.display="block"
imgError[2].style.display="block"
}
else if (regexNumber.test(password.value)) {
    passwordLevel2.style.display="block"
    imgError[2].style.display="block"
}

})



