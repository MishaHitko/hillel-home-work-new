import Form from "../Form/Form";
import {Link, useLocation} from "react-router-dom";

function EditContactPage({setContacts}) {
    const {state} = useLocation();

    return (
                <div className={'body'}>
                    <Link to="/">Main Page</Link>
                    <Form setContacts={setContacts} editContact={state}/>
                </div>
    );
}

export default EditContactPage;
