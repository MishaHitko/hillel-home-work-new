import {validate} from "./validate.js";
const blockForm = document.querySelector('form');
const inputId = document.querySelector('input');
validate();
blockForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let idFetch = inputId.value;
    try {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idFetch}`)
            .then(response => response.json())
            .then(data => displayData(data))
    } catch (err) {
        console.log(`Произошла ошибка ${err}`)
    };
});
function displayData(data) {
    const oldBlockAllComments = document.querySelector('.block-comments');
    if (oldBlockAllComments) {
        oldBlockAllComments.remove();
    }
    const oldBlockData = document.querySelector('.post');
    if(oldBlockData) {
        oldBlockData.remove();
    }
    const {userId, id, title, body} = data;
    const blockData = document.createElement('div');
    blockData.classList.add('post');
    blockData.innerHTML = `
    <h3>Пост</h3>
    <p>userId: ${userId}</p>
    <p>id: ${id}</p>
    <p>title: ${title}</p>
    <p>body: ${body}</p>`
    document.body.append(blockData);

    const buttonComments = document.createElement('button');
    buttonComments.innerText = 'Comments';
    blockData.append(buttonComments);

    buttonComments.addEventListener('click', () => {
        const oldBlockAllComments = document.querySelector('.block-comments');
        if (oldBlockAllComments) {
            oldBlockAllComments.remove();
        }
        let idFetch = inputId.value;
            try {
                fetch(`https://jsonplaceholder.typicode.com/posts/${idFetch}/comments`)
                    .then(response => response.json())
                    .then(comments => displayComments(comments))
            } catch (err) {
                console.log(`Произошла ошибка ${err}`)
            };
    })
}
function displayComments(comments) {
    const blockAllComments = document.createElement('div');
    blockAllComments.classList.add('block-comments');
    document.body.append(blockAllComments);
    comments.forEach(({postId, id, name, email, body}) => {
        const blockComment = document.createElement('div');
        blockComment.innerHTML = `
         <h3>Коментарий</h3>
         <p>postId: ${postId}</p>
         <p>id: ${id}</p>
         <p>name: ${name}</p>
         <p>email: ${email}</p>
         <p>body: ${body}</p>`
        blockComment.classList.add('post');
       blockAllComments.append(blockComment);
    })
}
