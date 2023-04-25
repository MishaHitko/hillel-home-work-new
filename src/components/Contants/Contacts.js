import React from 'react';

function Contacts ({contacts, setContacts}) {
    const deleteContact = (idContact) => () => {
        setContacts(contacts.filter(({id}) => idContact !== id));
    }
        return (
            <table>
                <tbody>
                {contacts && contacts.map(({id, name, username, phone, email}) =>  (
                    <tr key={id}>
                        <td>{name}</td>
                        <td>{username}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td><button onClick={deleteContact(id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
}

export default Contacts;