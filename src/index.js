import "./main.scss";
import { Logo } from './components/logo/Logo';
import { HeaderNavigation } from './components/header-navigation/Header-navigation';

const add123 = (a, b) => a + b;
let root  = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', Logo());
root.insertAdjacentHTML('beforeend', HeaderNavigation());

const res = add123(222, 3);
console.log("Helloasda");
