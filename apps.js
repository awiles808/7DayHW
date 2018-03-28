const form = document.getElementById("blogForm")

form.addEventListener("Submit", function(event){
    event.preventDefault()});

let inputValue = document.getElementById("blogInput").value

let newElement = document.create("p");

newElement.inner.HTML = inputValue;

document.getElementsByTagName("body")[0].appendChild(newElement);
