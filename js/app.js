//variables
const sendBtn=document.getElementById("sendBtn"),
      email=document.getElementById("email"),
      subject=document.getElementById("subject"),
      message=document.getElementById("message"),
      resetBtn=document.getElementById("resetBtn"),
      sendEmailform=document.getElementById("email-form");



//event listeners
eventListeners();
function eventListeners(){
    //-------init
    document.addEventListener("DOMContentLoaded",appInit);

    //-------Validate the form fields
    email.addEventListener('blur',validateField);
    subject.addEventListener("blur",validateField);
    message.addEventListener('blur',validateField);
    resetBtn.addEventListener("click",resetForm);
    sendEmailform.addEventListener('submit',sendEmail);
     

}

//functions

function appInit(){
    sendBtn.disabled=true;
}
function sendEmail(e){
    e.preventDefault(); 
    //---show spinner
    const spinner=document.querySelector('#spinner');
    spinner.style.display='block';

    // show the mail image
    const sendEmailImg =document.createElement('img');
    sendEmailImg.src='img/mail.gif';
    sendEmailImg.style.display='block';

    //---hide spinner then show email send image
    setTimeout(function(){
        //hide spinner
        spinner.style.display="none";

        //---show the image
        document.querySelector('#loaders').appendChild(sendEmailImg);
        setTimeout(function(){
            sendEmailform.reset();
            sendEmailImg.remove();
        },5000)
        },3000);
}
//---validate the field
function validateField(){
    let errors;
    //----validate length of the field
    validateLength(this);
    
    //----validate email
    if(this.type==='email'){
        validateEmail(this);
    }
    errors=document.querySelectorAll('.error');
    //------check that the fields are not empty
    if(message.vlaue!=='' && email.value!=='' && subject.value!==''){
        if (errors.length===0){
            sendBtn.disabled=false;
        }
    }
}

//---validate the length of the field
function validateLength(field){
    if(field.value.length>0){
        field.style.borderBottomColor='green';
        field.classList.remove('error');
    }
    else{
        field.style.borderBottomColor='red';
        field.classList.add('error'); 
    }
}

//------validate the email
function validateEmail(field){
    let emailText=field.value;
    //--checks if email contain @
    if(emailText.indexOf('@') !=-1){
        field.style.borderBottomColor='green';
        field.classList.remove('error');
    }
    else{
        field.style.borderBottomColor='red';
        field.classList.add('error');
    }
}
function resetForm(){
    sendEmailform.reset();

}