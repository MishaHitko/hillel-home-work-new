import  {name,finishCity,nowaPohta,finishPayment,finalCommentary,finalAmount} from './formSaveInfo.js'
export function modalIcon (item) {
    const modalContainer = document.createElement('div');
    const modalBody = document.createElement('div');
    const close = document.createElement('a');
    const form = document.querySelector('form');
    const formInfo = document.createElement('div');
    const productInfo = document.createElement('div');

    productInfo.innerHTML = `
        <p>Brand: ${item.brand}</p>
        <p>Price: ${item.price}</p>
    `

    modalContainer.classList.add('modal-container');
    modalBody.classList.add('modal-body');
    close.classList.add('close');
    form.classList.remove('form-none');
    form.classList.add('form-on');
    formInfo.classList.add('form-info')

    close.innerText = 'x';
    close.addEventListener('click', () => {
        location.reload();
    });

    form.onsubmit = e => {
        e.preventDefault()

        formInfo.append(productInfo)
        formInfo.append(name());
        formInfo.append(finishCity())
        formInfo.append(nowaPohta())
        formInfo.append(finishPayment())
        formInfo.append(finalAmount())
        formInfo.append(finalCommentary())
        form.classList.remove('form-on')
        form.classList.add('form-none')
    }

    form.oninput = ({target: input}) => {
        const { value, required } = input;
        const validationMassage = input.nextElementSibling;
        console.log(required, value.length);
        if (required && value.length < 1) {
            input.classList.add('invalidInput');
            validationMassage.classList.add('invalidText');
            validationMassage.innerText = 'Введите данные коректно'
            return;
        }
        validationMassage.innerText = '';
        input.classList.remove('invalidInput');
        validationMassage.classList.remove('invalidText');
    }

    document.body.append(modalContainer);
    modalContainer.append(modalBody);
    modalBody.append(form);
    modalBody.append(formInfo);
    modalBody.append(close);
};
