import {validate} from "./validate.js";
import {displayData} from "./displayData.js";
import {getPostURL} from "./URL.js";

const blockForm = document.querySelector('form');
const inputId = document.querySelector('input');
const button = document.querySelector('button');

button.disabled = true;
inputId.oninput = validate;

blockForm.addEventListener('submit', (event) => {
    event.preventDefault();
    getFetchPost();
});

function getFetchPost () {
    fetch(getPostURL(inputId.value))
        .then(response => response.json())
        .then(data => displayData(data))
        .catch (err => console.log(`Произошла ошибка ${err}`))
}