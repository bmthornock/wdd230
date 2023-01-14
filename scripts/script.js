copyright.textContent = `© 2023 .:|:. Brenton M. Thornock .:|:. Somewhere Beyond the Sea`;

const nDateMod = document.querySelector('#copyright');

const date = new Date(document.lastModified);
document.getElementById("demo").innerHTML = date;