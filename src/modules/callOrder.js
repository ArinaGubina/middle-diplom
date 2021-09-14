const callOrder = () => {
    const header = document.querySelector('#header'),
        headerModal = document.querySelector('.header-modal'),
        overlay = document.querySelector('.overlay'),
        headerModalClose = document.querySelector('.header-modal__close');

    headerModalClose.addEventListener('click', () => {
        headerModal.style.display = 'none';
        overlay.style.display = 'none';
    });

    header.addEventListener('click', event => {
        event.preventDefault();
        if(event.target.closest('.btn')) {
            headerModal.style.display = 'block';
            overlay.style.display = 'block';
        }   
    });    
};

export default callOrder;