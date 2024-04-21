import './style.css'
import loadFooter from "./Components/Footer";

function init() {
  const content = document.querySelector('#content');
  content.appendChild(loadFooter());
}

init();