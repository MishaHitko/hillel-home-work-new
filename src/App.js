import './App.css';
import Contacts from "./components/Contants/Contacts";
import Form from "./components/Form/Form";
import {useEffect, useState} from "react";

function App() {
    const [openForm, setOpenForm] = useState(false);
    const [contacts, setContacts] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(result => setContacts(result))
    }, [])

  return (
          <div className={'body'}>
              <Contacts contacts={contacts} setContacts={setContacts}/>
              <button onClick={() => setOpenForm(true)}>New contact</button>
              {openForm && (<Form closeForm={setOpenForm} setContacts={setContacts}/>)}
          </div>
  );
}

export default App;
