import './Modal.css';

function Modal({setContacts, idContact, setOpenModal}) {
    const deleteContact = () => {
        setContacts(prevContacts => prevContacts.filter(({id}) => idContact !== id));
        setOpenModal(false);
    }
    const canselDeleting = () => {
        setOpenModal(false)
    }
        return (
            <div className={'modal'}>
                <div className={'modal__body'}>
                    <p>Are you sure you want to delete a contact?</p>
                    <div>
                        <button className={'modal__btn'} onClick={deleteContact}>Yes</button>
                        <button className={'modal__btn'} onClick={canselDeleting}>No</button>
                    </div>
                </div>
            </div>

        );
}

export default Modal;