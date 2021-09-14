const slider = obj => {
    const arrowRight = document.querySelector(obj.arrowRight),
        arrowLeft = document.querySelector(obj.arrowLeft),
        items = document.querySelectorAll(obj.items),
        mobile = (window.screen.width >= 576) ? false : true;

    let index = 0;
    items[index].parentNode.style.flexWrap = 'wrap';
    items[index].parentNode.style.overflow = 'hidden';
    items[index].parentNode.style.maxHeight = `${obj.rowHeight}px`;

    if (mobile) {
        const padding = Math.ceil((window.screen.width - obj.itemWidth) / 2);
        items[index].parentNode.style.justifyContent = 'center';
        items[index].parentNode.style.padding = `0 ${padding}px`;
    }

    arrowRight.addEventListener('click', () => {
        items[index].parentNode.appendChild(items[index]);
        index = (index + 1) % items.length;
    });

    arrowLeft.addEventListener('click', () => {
        items[index].parentNode.insertBefore(items[(index + items.length - 1) % items.length], items[index]);
        index = (index + items.length - 1) % items.length;
    });
};

export default slider;