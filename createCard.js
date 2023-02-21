export function createCard (title, data) {
    const blockData = document.createElement('div');
    blockData.classList.add('post');
    blockData.innerHTML = `<h2>${title}</h2>`
    Object.entries(data).forEach((item) => {
        blockData.innerHTML += `<p>${item[0]}: ${item[1]}</p>`
    })
    return blockData;
}