const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form #username")
const NaverLink = document.querySelector(".ToNaver a");
const SimpleNotice = document.querySelector(".SimpleNotice p");
const greeting = document.querySelector(".greeting")
const resetNamediv = document.querySelector(".resetName")
const resetNamebutton = resetNamediv.querySelector("button");


const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";
function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);

    loginForm.classList.add(HIDDEN_CLASS);
    //greeting.innerText = "Hello " + username;
    writeGreeting(username);

    localStorage.setItem(USERNAME_KEY,username);
}

function onNaverClick(event){
    event.preventDefault();
    console.log(event);
}

function onCopyNotice(event){
    event.preventDefault();
    event.clipboardData.setData("Text","Do not copy!");
}

function writeGreeting(name){
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText = `Hello ${name}`;
    resetNamediv.classList.remove(HIDDEN_CLASS);
}

function onResetName(){
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASS);
    greeting.classList.add(HIDDEN_CLASS);
    resetNamediv.classList.add(HIDDEN_CLASS);
    loginInput.value = "";
}

NaverLink.addEventListener("click", onNaverClick);
SimpleNotice.addEventListener("copy",onCopyNotice);
resetNamebutton.addEventListener("click",onResetName)
loginForm.addEventListener("submit",onLoginSubmit);

const SavedUsername = localStorage.getItem(USERNAME_KEY);

if(SavedUsername === null){
   loginForm.classList.remove(HIDDEN_CLASS);
   
}
else{
    writeGreeting(SavedUsername);
    resetNamediv.classList.remove(HIDDEN_CLASS);
    
}