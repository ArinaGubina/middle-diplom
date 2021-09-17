const scroll = () => {
    const scrollBtn = document.querySelector('.smooth-scroll'),
        offer = document.querySelector('#offer'),
        top = offer.offsetTop + offer.offsetHeight,
        scrollTo = () => {offer.scrollIntoView({ block: "start", behavior: "smooth" })};

        scrollBtn.style.display = 'none';

        document.addEventListener('scroll', () => {
            if (window.scrollY > top) {
                scrollBtn.style.display = 'block';
            } else {
                scrollBtn.style.display = 'none';
            }
        });

        scrollBtn.addEventListener('click', () => {
            scrollTo();
        });
};

export default scroll;
