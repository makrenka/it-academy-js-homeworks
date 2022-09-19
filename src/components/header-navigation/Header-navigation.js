import './Header-navigation.scss';

export const HeaderNavigation = () => {    
    return `<nav class="header__navigation"><ul class="header__navigation-list">${link1}${link2}${link3}${link4}${link5}</ul></nav>`;    
}

const link1 = '<li><a href="#" class="header__navigation-link">Блог</a></li>';
const link2 = '<li><a href="#" class="header__navigation-link">Курси</a></li>';
const link3 = '<li><a href="#" class="header__navigation-link">Про мене</a></li>';
const link4 = '<li><a href="#" class="header__navigation-link">Підписка на сайт</a></li>';
const link5 = '<li><a href="#" class="header__navigation-link">Підтримка</a></li>';
