import accordion from "./modules/accordion.js";
import clock from "./modules/clock.js";
import sendForm from "./modules/sendform.js";

window.addEventListener('DOMContentLoaded', () => {
    clock('#time-days', '#time-hours', '#time-minutes', '#time-seconds', new Date('2023-07-24'));
    accordion('.accordion__segment', '.accordion__page', '.accordion__element');
    sendForm('#subscribe-form', '#dialog', '.close', '.dialog__title', '.dialog__text');
})