import Contacts from "../Contants/Contacts";
import Form from "../Form/Form";

function MainPage({setContacts, setOpenForm, contacts, openForm}) {

    return (
                <div className={'body'}>
                    <Contacts contacts={contacts} setContacts={setContacts}/>
                    <button onClick={() => setOpenForm(true)}>New contact</button>
                    {openForm && (<Form closeForm={setOpenForm} setContacts={setContacts}/>)}
                </div>
    );
}

export default MainPage;
