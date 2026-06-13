    document.getElementsByTagName('body')[0].style.background='black'
    import{auth , createUserWithEmailAndPassword} from'./config.js'

    let checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail\.com$/ // this @gmail.com regex only
    let checkPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{12,128}$/

    let emailInput = document.querySelector('#email')
    let passInput  = document.querySelector('#password')
    let confirmPassInput = document.querySelector('#confirm-pass')
    let submitbtn = document.querySelector('#submit-btn')
    let emailNotValid = document.querySelector('.email-filed')

submitbtn.addEventListener('click',checkInputs)
 
function checkInputs(event) {

        event.preventDefault();
        let {value : email} = document.getElementById('email')
        let {value : password} = document.getElementById('password')
        let {value : confirmpass}= document.getElementById('confirm-pass')
        let validEmail = checkEmail.test(email)
        let validPass  = checkPassword.test(password)
        let confirmpassword = validPass && password == confirmpass  

        if (validEmail && confirmpassword){
    
            createUserWithEmailAndPassword(auth , email , password)
            .then((userCredential)=>{
    
            console.log(userCredential)
            emailInput.style.border='2px solid black'
            passInput.style.border='2px solid black'
            confirmPassInput.style.border='2px solid black'
            emailInput.value=''
            passInput.value=''
            confirmPassInput.value=''
            }).catch((error)=>{console.log(error)
            
            console.log('go to dashboard')
            alert('this user already have an account')})
        }else{
        if (!validEmail) {
        
            emailInput.style.border='2px solid red'
            console.log('your email is not found')  // this work done now
     
        }else{emailInput.style.border='2px solid green'}
        if (!validPass){
     
            passInput.style.border='2px solid red'
            console.log('check you pass in uppercase , lowerCase , @!#%^etc,number')
     
        }else{
     
            passInput.style.border='2px solid green'
     
        }if(!confirmpassword){
     
            confirmPassInput.style.border='2px solid red'
     
        }else{confirmPassInput.style.border='2px solid green'}
}   

// Sohair@329256 check pass
        
        console.log(email,password , validEmail, validPass)
}