import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Modal from "../Modal/Modal";

function Contacts ({contacts, setContacts}) {
    const [openModal, setOpenModal] = useState(false);
    const [idContact, setIdContact] = useState(null);

    const deleteClick = (id) => {
        setOpenModal(true);
        setIdContact(id);
    }
        return (
            <>
            <table>
                <tbody>
                {contacts && contacts.map(({id, name, username, phone, email}) =>  (
                    <tr key={id}>
                        <td>{name}</td>
                        <td>{username}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td><button onClick={() => deleteClick(id)}>Delete</button></td>
                        <td><button><Link state={{id, name, username, phone, email}} to="/page">Change</Link></button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            {openModal && <Modal contacts={contacts}
                                 setContacts={setContacts}
                                 idContact={idContact}
                                 setOpenModal={setOpenModal}/>}
            </>
        );
}

export default Contacts;