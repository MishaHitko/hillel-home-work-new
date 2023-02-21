import {displayComments} from "./displayComments.js";
import {getCommentsURL} from "./URL.js";
import {createCard} from "./createCard.js";

export function displayData(data) {
    checkOldBlockComments();
    checkOldBlockPost();

    const post = createCard('Пост', data)

    const buttonComments = document.createElement('button');
    buttonComments.innerText = 'Comments';
    post.append(buttonComments);

    buttonComments.addEventListener('click', () => {
        checkOldBlockComments();
        getFetchComments();
    });
    document.body.append(post);
}
function checkOldBlockPost () {
    const oldBlockData = document.querySelector('.post');
    if(oldBlockData) {
        oldBlockData.remove();
    }
}

function checkOldBlockComments () {
    const oldBlockAllComments = document.querySelector('.block-comments');
    if (oldBlockAllComments) {
        oldBlockAllComments.remove();
    }
}

function getFetchComments () {
    const inputId = document.querySelector('input');
    fetch(getCommentsURL(inputId.value))
        .then(response => response.json())
        .then(comments => displayComments(comments))
        .catch (err => console.log(`Произошла ошибка ${err}`))
}