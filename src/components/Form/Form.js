import React, {useState} from 'react';
import './Form.css';

function Form ({closeForm, setContacts}) {
        const [form, setForm] = useState({name: '', phone: '', username: '', email: ''});

        const onChange = ({target: {value, name}}) => {
                console.log(value)
                console.log(name)
                setForm({...form, [name]: value});
        }

        const handleSubmit = (event) => {
                event.preventDefault();
                setContacts((contacts) => ([
                        ...contacts, {...form, id: Math.random()}
                ]));
                closeForm(false);
        }
        console.log(form);
        return (
            <form className={'form'} onSubmit={handleSubmit}>
                <p>Name:</p>
                <input name={'name'} onChange={(event) => onChange(event)}/>
                <p>Username:</p>
                <input name={'username'} onChange={(event) => onChange(event)}/>
                <p>Phone:</p>
                <input name={'phone'} onChange={(event) => onChange(event)}/>
                <p>Email:</p>
                <input name={'email'} onChange={(event) => onChange(event)}/>
                <input type={"submit"} value={'Save'}/>
                <button onClick={() => closeForm(false)}>Cancel</button>
            </form>
        );
}

export default Form;