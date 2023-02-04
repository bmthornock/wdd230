copyright.textContent = '©';

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;


const currentDate = new Date().toDateString()
document.querySelector("#dateTime").innerHTML = currentDate;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

const dow = date.getDay();

 if (dow <= 2) {
    const message = "Come join us at Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    document.querySelector("meetMessage").innerHTML = message;
 }