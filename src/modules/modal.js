const modal = obj => {
    const header = document.querySelector(obj.parent),
        headerModal = document.querySelector(obj.modal),
        overlay = document.querySelector(obj.overlay),
        headerModalClose = document.querySelector(obj.close);

    headerModalClose.addEventListener('click', () => {
        headerModal.style.display = 'none';
        overlay.style.display = 'none';
    });

    header.addEventListener('click', event => {
        event.preventDefault();
        if(event.target.closest(obj.target)) {
            headerModal.style.display = 'block';
            overlay.style.display = 'block';
        }   
    });    
};

export default modal;