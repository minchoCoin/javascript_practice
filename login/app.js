const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form #username")
const NaverLink = document.querySelector(".ToNaver a");
const SimpleNotice = document.querySelector(".SimpleNotice p");
const greeting = document.querySelector(".greeting")

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
}

NaverLink.addEventListener("click", onNaverClick);
SimpleNotice.addEventListener("copy",onCopyNotice);

const SavedUsername = localStorage.getItem(USERNAME_KEY);

if(SavedUsername === null){
   loginForm.classList.remove(HIDDEN_CLASS);
   loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    writeGreeting(SavedUsername);
    
}