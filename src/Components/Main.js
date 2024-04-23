import gameController from './GameController';
import './Main.css';

function loadMain() {
  const content = document.querySelector('#content');
  const main = document.createElement('main');
  
  content.appendChild(main);
  gameController();
}

export default loadMain;