import { loadBoard } from './Helper/GameController';
import './Main.css';

function loadMain() {
  const main = document.createElement('main');
  main.appendChild(loadBoard());

  return main;
}

export default loadMain;