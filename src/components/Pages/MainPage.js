import Contacts from "../Contants/Contacts";
import Form from "../Form/Form";
import {useState} from "react";

function MainPage({setContacts, contacts}) {
    const [openForm, setOpenForm] = useState(false);

    return (
                <div className={'body'}>
                    <Contacts contacts={contacts} setContacts={setContacts}/>
                    <button onClick={() => setOpenForm(true)}>New contact</button>
                    {openForm && (<Form closeForm={setOpenForm} setContacts={setContacts}/>)}
                </div>
    );
}

export default MainPage;
