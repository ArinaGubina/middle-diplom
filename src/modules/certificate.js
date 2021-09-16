const certificate = (height, width) => {
    const docs = document.getElementById('documents');

    docs.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target,
            href = target.closest('a').getAttribute('href');
        if (href) {
            const img = document.createElement('img'),
                close = document.createElement('div'),
                overlay = document.querySelector('.overlay');
            
            img.setAttribute('src', href);
            img.style.cssText = `width: ${width}px; margin: auto;`;
            overlay.appendChild(img);

            close.style.cssText = `background: white; border-radius: 22px; padding: 6px; 
            cursor: pointer; width: 40px; height: 40px; font-size: 40px; color: #0c484a; 
            position: fixed; top: calc(50% - ${height / 2 + 11}px); bottom: 0; 
            left:  calc(50% + ${width / 2 - 30}px); right: 0; z-index: 101;`;
            close.textContent = '✘';
            overlay.appendChild(close);
            overlay.style.display = 'flex';

            close.addEventListener('click', () => {
                overlay.style.display = 'none';
                img.remove();
                close.remove();
            });
        }
    });
};

export default certificate;