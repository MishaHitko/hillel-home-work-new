import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./components/Pages/MainPage";
import Page from "./components/Pages/Page";
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
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage contacts={contacts} openForm={openForm} setContacts={setContacts} setOpenForm={setOpenForm} />} />
              <Route path="/page" element={<Page setContacts={setContacts} />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
