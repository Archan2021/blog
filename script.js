'use strict';//strict mode is a way to opt in to a restricted variant of JavaScript

//navbar variables
const nav=document.querySelector('.mobile-nav');//selecting the class nav
const navMenuBtn=document.querySelector('.nav-menu-btn');//selecting the class nav-menu-btn
const navCloseBtn=document.querySelector('.nav-close-btn');//selecting the class nav-close-btn

//navToggle function
const navToggleFunc = function () {
    nav.classList.toggle('active');//toggling the class open
    }

navMenuBtn.addEventListener('click', navToggleFunc);//adding event listener to the navMenuBtn
navCloseBtn.addEventListener('click', navToggleFunc);//adding event listener to the navCloseBtn

//theme toggle variables
const themeBtn=document.querySelector('.theme-btn');//selecting the class theme-btn

for(let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].addEventListener('click', function() {

        //toggle 'light' and 'dark' from class 'body'
        //when theme button is clicked
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme");

        for(let i = 0; i < themeBtn.length; i++) {

            //when the theme-btn is clicked
            //toggle 'light' and 'dark' from all classes between light and dark 'theme-btn'
            themeBtn[i].classList.toggle('light');
            themeBtn[i].classList.toggle('dark');
        }
    })
}