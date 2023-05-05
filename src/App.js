import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./components/Pages/MainPage";
import EditContactPage from "./components/Pages/EditContactPage";
import {useEffect, useState} from "react";

function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(result => setContacts(result))
    }, [])

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage contacts={contacts} setContacts={setContacts}/>} />
              <Route path="/page" element={<EditContactPage setContacts={setContacts} />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
