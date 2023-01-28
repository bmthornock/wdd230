copyright.textContent = '©';

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;

document.querySelector("#dateTime").innerHTML = date;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);