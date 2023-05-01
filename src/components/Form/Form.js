import React, {useState} from 'react';
import './Form.css';
import {Link, useNavigate} from "react-router-dom";


function Form ({closeForm, setContacts, editContact}) {
        const [form, setForm] = useState({
                name: editContact ? editContact.name : '',
                phone: editContact ? editContact.phone : '',
                username: editContact ? editContact.username : '',
                email: editContact ? editContact.email : ''
        });

        const navigate = useNavigate();


        const onChange = ({target: {value, name}}) => {
                setForm({...form, [name]: value});
        }

        const handleSubmit = () => {
                if(editContact) {

                        setContacts((contacts) => {
                                    const newContacts = contacts.filter(({id}) => id !== editContact.id)
                                return [...newContacts, {...form, id: Math.random()}]
                            });

                        return
                }
                setContacts((contacts) => ([
                        ...contacts, {...form, id: Math.random()}
                ]));

                !editContact && closeForm(false);
        }

        const onSumbit = event => {
                event.preventDefault()
                navigate('/')
                handleSubmit()
        }
        return (
            <form className={'form'} onSubmit={onSumbit}>
                <p>Name:</p>
                <input value={form.name} name={'name'} onChange={onChange}/>
                <p>Username:</p>
                <input value={form.username} name={'username'} onChange={onChange}/>
                <p>Phone:</p>
                <input value={form.phone} name={'phone'} onChange={onChange}/>
                <p>Email:</p>
                <input value={form.email}  name={'email'} onChange={onChange}/>
                <button type={"submit"} value={'Save'}>Save</button>
                {editContact ? (
                    <button><Link to={'/'}>Cancel</Link></button>
                ) :
                (
                    <button onClick={() => closeForm(false)}>Cancel</button>
                )}
            </form>
        );
}

export default Form;