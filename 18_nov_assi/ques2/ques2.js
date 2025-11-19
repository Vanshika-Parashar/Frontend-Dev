const btn=document.getElementById("submitbtn");

//Input
let name=document.getElementById("name");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let password=document.getElementById("password");
//Error elements
let nameerror=document.getElementById("nameError");
let emailerror=document.getElementById("emailError");
let phoneerror=document.getElementById("phoneError");
let passerror=document.getElementById("passError");

btn.addEventListener("click",function(e){
    e.preventDefault();
    let valid=true;
    //name validation
let namereg=/^[A-Za-z ]+$/;
if(!namereg.test(name.value)){
    name.classList.add("invalid");
    name.classList.remove("valid");
    nameerror.textContent="name should only have aphabets"
    valid=false;
}
else{
    name.classList.add("valid");
    name.classList.remove("Invalid");
    nameerror.textContent=" ";
}
//email validation
let emailreg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
if(!emailreg.test(email.value)){
    email.classList.add("invalid");
    email.classList.remove("valid");
    emailerror.textContent="enter valid email"
    valid=false;
}
else{
    email.classList.add("valid");
    email.classList.remove("Invalid");
    emailerror.textContent=" ";
}
let phonereg=/^[0-9]{10}$/;
if(!phonereg.test(phone.value)){
    phone.classList.add("invalid");
    phone.classList.remove("valid");
    phoneerror.textContent="phone number must exactly 10 digits"
    valid=false;
}
else{
    phone.classList.add("valid");
    phone.classList.remove("Invalid");
    phoneerror.textContent=" ";
}
let passreg= /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).+$/;
if(!passreg.test(password.value)){
    password.classList.add("invalid");
    password.classList.remove("valid");
    passerror.textContent="passod must contain 1 uppercase,1 number,and 1 special character"
    valid=false;
}
else{
    password.classList.add("valid");
    password.classList.remove("Invalid");
    passerror.textContent=" ";
}
if(valid){
    alert("Form submitted successfully");
}
})




