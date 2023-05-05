import React, {useState} from 'react';
import './Form.css';
import {Link, useNavigate} from "react-router-dom";


function Form ({closeForm, setContacts, editContact}) {
        const DEFAULT_FORM_VALUES = {
                name: '',
                phone: '',
                username: '',
                email: ''
        };

        const [form, setForm] = useState(editContact ?  editContact : DEFAULT_FORM_VALUES);

        const navigate = useNavigate();

        const onChange = ({target: {value, name}}) => {
                setForm({...form, [name]: value});
        }

        const editContacts = (contacts, newContact, editContactId) => (
            contacts.map(contact => (contact.id === editContactId ? {...newContact, id: crypto.randomUUID()} : contact
            ))
        );

        const  onClose = () => {
            editContact ?  navigate('/') : closeForm(false);
        }
        const handleSubmit = event => {
                event.preventDefault()
               setContacts((contacts) => (
                   editContact ?
                       editContacts(contacts, form, editContact.id) :
                       [...contacts, {...form, id: Math.random()}]
                ));
                onClose();
        }

        return (
            <form className={'form'} onSubmit={handleSubmit}>
                <p>Name:</p>
                <input value={form.name} name={'name'} onChange={onChange}/>
                <p>Username:</p>
                <input value={form.username} name={'username'} onChange={onChange}/>
                <p>Phone:</p>
                <input value={form.phone} name={'phone'} onChange={onChange}/>
                <p>Email:</p>
                <input value={form.email}  name={'email'} onChange={onChange}/>
                <button type={"submit"} value={'Save'}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </form>
        );
}

export default Form;