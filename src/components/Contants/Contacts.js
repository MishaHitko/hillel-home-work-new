import React from 'react';

function Contacts ({contacts, setContacts}) {
    const deleteContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    }
        return (
            <table>
                <tbody>
                {contacts && contacts.map((contact) =>  (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.username}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.email}</td>
                        <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
}

export default Contacts;