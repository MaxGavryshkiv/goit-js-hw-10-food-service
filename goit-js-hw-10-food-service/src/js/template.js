export default 'template';

import template from '../templates/template.hbs';
import menu from '../menu.json';

// console.log(template(menu))
const menuUlRef = document.querySelector('.js-menu')
const dishCards = template(menu);
menuUlRef.insertAdjacentHTML('beforeend',dishCards)