export  const FORM_VALID = {
    name: {
        reqExp: /^[А-Я A-Z]+$/i,
        errorMessage: 'Некорректно введено имя!'
    },
    password: {
        reqExp: /^[a-zA-Z0-9!@#$%^&*()_+~`|}{[\]\\:';"<>,.?/]{6,20}$/,
        errorMessage: 'Некорректно введен пароль!(Пароль должен содержать от 6 до 20 символов)'
    },
    age: {
        reqExp: /^[0-9]{1,2}$/i,
        errorMessage: 'Некорректно введен возраст!'
    },
    email: {
        reqExp: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        errorMessage: 'Некорректно введен имейл!'
    },
    tel: {
        reqExp: /^[0-9]{10,13}$/i,
        errorMessage: 'Некорректно введен номер телефона!'
    },
    bank: {
        reqExp: /^[0-9]{16}$/i,
        errorMessage: 'Некорректно введен номер банковской карты!'
    }
};