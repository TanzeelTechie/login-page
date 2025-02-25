// form switching functionality 
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

showSignup.addEventListener('click', ()=>{
    loginForm.classList.remove('active');
    setTimeout( ()=>{
        signupForm.classList.add('active');
    },300);
});

showLogin.addEventListener('click', ()=>{
    signupForm.classList.remove('active');
    setTimeout( ()=>{
        loginForm.classList.add('active');
    },300);
});
