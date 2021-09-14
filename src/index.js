import callOrder from './modules/callOrder';
import slider from './modules/slider';

callOrder();

slider({
    arrowRight: '.benefits__arrow--right',
    arrowLeft: '.benefits__arrow--left',
    items: '.benefits__item',
    rowHeight: 191,
    itemWidth: 195,
});

slider({
    arrowRight: '.services__arrow--right',
    arrowLeft: '.services__arrow--left',
    items: '.services__item',
    rowHeight: 280,
    itemWidth: 545,
});