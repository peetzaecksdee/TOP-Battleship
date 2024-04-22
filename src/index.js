import './style.css'
import loadHeader from './Components/Header';
import loadMain from './Components/Main';
import loadFooter from "./Components/Footer";

function init() {
  const content = document.querySelector('#content');
  content.appendChild(loadHeader());
  content.appendChild(loadMain());
  content.appendChild(loadFooter());
}

init();