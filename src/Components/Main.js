import renderBoard from './Helper/BoardRenderer';
import gameController from './GameController';
import './Main.css';

function loadMain() {
  const content = document.querySelector('#content');
  const main = document.createElement('main');
  main.appendChild(renderBoard());
  
  content.appendChild(main);
  gameController();
}

export default loadMain;