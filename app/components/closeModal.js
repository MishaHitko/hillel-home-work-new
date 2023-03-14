export function closeModal() {
    const openModal = document.querySelector('.modal')
    if (openModal) {
        openModal.remove();
    }
}
