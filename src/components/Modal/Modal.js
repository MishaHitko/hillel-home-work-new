import './Modal.css';

function Modal({contacts, setContacts, idContact, setOpenModal}) {
    const deleteContact = () => {
        setContacts(contacts.filter(({id}) => idContact !== id));
        setOpenModal(false);
    }
        return (
            <div className={'modal'}>
                <div className={'modal__body'}>
                    <p>Are you sure you want to delete a contact?</p>
                    <div>
                        <button className={'modal__btn'} onClick={deleteContact}>Yes</button>
                        <button className={'modal__btn'} onClick={() => setOpenModal(false)}>No</button>
                    </div>
                </div>
            </div>

        );
}

export default Modal;