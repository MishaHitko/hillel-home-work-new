export function validate (event) {
    const blockForm = document.querySelector('form');
    const button = document.querySelector('button');
    const blockValid = document.querySelector('.valid-block');


    if(event.target.valueAsNumber <= 100 && event.target.valueAsNumber > 0) {
       blockValid.classList.add('error')
       button.disabled = false;
    } else {
        blockForm.append(blockValid);
        blockValid.classList.remove('error');
        button.disabled = true;
    }

}