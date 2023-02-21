import {createCard} from "./createCard.js";

export function displayComments(comments) {
    const blockAllComments = document.createElement('div');
    blockAllComments.classList.add('block-comments');
    document.body.append(blockAllComments);

    comments.forEach((comment) => {
        blockAllComments.append(createCard('Коментарий', comment));
    })
}