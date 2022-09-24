const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const NaverLink = document.querySelector(".ToNaver a");
const SimpleNotice = document.querySelector(".SimpleNotice p");

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
}

function onNaverClick(event){
    event.preventDefault();
    console.log(event);
}

function onCopyNotice(event){
    event.preventDefault();
    event.clipboardData.setData("Text","Do not copy!");
}

loginForm.addEventListener("submit",onLoginSubmit);
NaverLink.addEventListener("click", onNaverClick);
SimpleNotice.addEventListener("copy",onCopyNotice);