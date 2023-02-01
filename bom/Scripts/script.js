const input = document.querySelector('input');
const button = document.querySelector("button");
const list = document.querySelector("ul");
//const deleteSymbol = document.querySelector("#deleteSymbol")
//deleteSymbol

button.addEventListener('click', function () {
    const newItem = input.value;
    input.value = '';

    const newList = document.createElement("li");
    const newText = document.createElement("span");
    const newDelete = document.createElement("button");

    newList.appendChild(newText);
    newText.innerHTML = newItem;
    newList.appendChild(newDelete);
    newDelete.textContent = "X"
    list.appendChild(newList);



    newDelete.addEventListener('click', function () {
        list.removeChild(newList)
    })
    input.focus();
})

