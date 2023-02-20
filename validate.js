export function validate () {
    const blockForm = document.querySelector('form');
    const inputId = document.querySelector('input');
    const button = document.querySelector('button');
    const blockValid = document.createElement('div');
    button.disabled = true;

    inputId.oninput = event => {
        if(inputId.value <= 100 && inputId.value > 0) {
            blockValid.remove();
            button.disabled = false;
        } else {
            blockValid.innerText = 'Неверно введен id(укажите id от 1 до 100)';
            blockForm.append(blockValid);
            button.disabled = true;
        }
    }
}