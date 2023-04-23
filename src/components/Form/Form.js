import React, {useState} from 'react';
import './Form.css';

function Form ({closeForm, setContacts}) {
        const [newContactName, setNewContactName] = useState('');
        const [newContactUsername, setNewContactUsername] = useState('');
        const [newContactPhone, setNewContactPhone] = useState('');
        const [newContactEmail, setNewContactEmail] = useState('');

        const handleSubmit = (event) => {
                event.preventDefault();
                const newContact = {
                        name: newContactName,
                        username: newContactUsername,
                        phone: newContactPhone,
                        email: newContactEmail,
                        id: Math.random()
                }
                setContacts((contacts) => {
                    return [...contacts, newContact]
                });
                closeForm(false);
        }
        return (
            <form className={'form'} onSubmit={handleSubmit}>
                <p>Name:</p>
                <input onChange={(event) => setNewContactName(event.target.value)}/>
                <p>Username:</p>
                <input onChange={(event) => setNewContactUsername(event.target.value)}/>
                <p>Phone:</p>
                <input onChange={(event) => setNewContactPhone(event.target.value)}/>
                <p>Email:</p>
                <input onChange={(event) => setNewContactEmail(event.target.value)}/>
                <input type={"submit"} value={'Save'}/>
                <button onClick={() => closeForm(false)}>Cancel</button>
            </form>
        );
}

export default Form;