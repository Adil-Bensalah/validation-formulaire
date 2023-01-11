const form = document .querySelector('form')
form.addEventListener('submit',handelsubmit)
function handelsubmit(e){
e.preventDefault()
usernameFunc()
emailFunc()
passwordFunc()
confirmFunc()
handeltoast ()



}

const input = document.querySelectorAll('input')
const container = document.querySelector('.container')

   
    const username = input[0]
    const imgError = document.querySelectorAll('img')
    const ErroMessage = document.querySelectorAll('.erroUsername')
    
    username.addEventListener('keyup',usernameFunc)
    
    function usernameFunc(){
        const numberOfLetters = username.value.replace(/[^a-z]/gi, "").length
    if (numberOfLetters < 3) {
        imgError[0].src="ressources/error.svg"
        imgError[0].style.display="block"
        ErroMessage[0].textContent="Choisissez un pseudo contenant au moins 3 caractères."
        
    }
        else  {
        imgError[0].src="ressources/check.svg"
        imgError[0].style.display="block"
        ErroMessage[0].textContent=""
        }
              
    }


    const email = input[1]
    const emailMessage = document.querySelector('.errorEmail')

    
    email.addEventListener('keyup',emailFunc)
    
    function emailFunc(){

    // function isValidEmail(email){
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //}     
    if (email.value.match(regexEmail)){
        imgError[1].src="ressources/check.svg"
        imgError[1].style.display="block"
        emailMessage.textContent=""
    }
        else  {
            imgError[1].src="ressources/error.svg"
            imgError[1].style.display="block"
            emailMessage.textContent="Rentrez un email valide."
              
    }
}


const password = input[2]
const passwordLevel1 = document.querySelector('.l1')
const passwordLevel2 = document.querySelector('.l2')
const passwordLevel3 = document.querySelector('.l3')


password.addEventListener('keyup',passwordFunc)
   
    function passwordFunc(){
    const regex = /^.{0,6}$/
    const regexNumber = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z\d]{7,}$/;
    const regexSpecial = /^(?=.*[0-9])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&*.]{7,}$/
    const numberOfLetters = password.value.length

if(password.value.match(regex)){  
passwordLevel1.textContent="faible"    
passwordLevel1.style.display="block"
imgError[2].style.display="block"
}

if (numberOfLetters<1) {
    passwordLevel1.style.display="none"
    imgError[2].style.display="block"

}

if(regexNumber.test(password.value)) {
    passwordLevel2.textContent="moyen"  
    passwordLevel2.style.display="block"
    imgError[2].style.display="block"
 }

if(!regexNumber.test(password.value)) {
    passwordLevel2.textContent=""  
    passwordLevel2.style.display="none"
    imgError[2].style.display="block"
 }

if (password.value.match(regexSpecial)) {
    passwordLevel2.textContent="moyen"  
    passwordLevel2.style.display="block"
    passwordLevel3.textContent="fort"  
    passwordLevel3.style.display="block"
    imgError[2].style.display="block"
    imgError[2].src="ressources/check.svg"

}

else {
    passwordLevel3.textContent=""  
    passwordLevel3.style.display="none"
    imgError[2].style.display="block"
    imgError[2].src="ressources/error.svg"

}
}

const passwordConfirm= input[3]

passwordConfirm.addEventListener('keyup', confirmFunc)

function confirmFunc(){
 if (passwordConfirm.value === password.value && passwordConfirm.value.length>1) {
    imgError[3].src="ressources/check.svg"
    imgError[3].style.display="block"
 } 
 
 else {
    imgError[3].src="ressources/error.svg"
    imgError[3].style.display="block"
 }
}

function handeltoast (){
    const toast = document.querySelector('.toast')
 
   let allInputs =input.forEach(input=>{

    
if  (input.value.length < 1) {
 
    toast.textContent=""
    toast.style.backgroundColor="r"
}

else{
    toast.textContent="Données envoyées avec succès."
    toast.style.backgroundColor="green"
    document.querySelector('.toastBlock').appendChild(toast)
    setTimeout(() => {
        toast.remove()
    }, 3000);
}

})
}



