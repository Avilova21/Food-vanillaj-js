import tabs from './modules/tabs';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import modal, {openModal, closeModal} from '.modules/modal';

 window.addEventListener("DOMContentLoaded", () => {

	 const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

	tabs();
	modal("[data-modal]", ".modal", modalTimerId);
	timer();
	cards();
	calc();
	forms();
	slider();
});

