import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';
import form from './modules/form';
import rules from './modules/rules';
import certificate from './modules/certificate';
import scroll from './modules/scroll';
import calc from './modules/calc';

timer('20 september 2021');

scroll();

modal({
    parent: '#header',
    modal: '.header-modal',
    overlay: '.overlay',
    close: '.header-modal__close',
    target: '.btn',
});

modal({
    parent: '#services',
    modal: '.services-modal',
    overlay: '.overlay',
    close: '.services-modal__close',
    target: '.service-button',
});

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

timer('20 september 2021', 1);

rules();

form();

certificate(565, 400);

calc();