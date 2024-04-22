import renderBoard from './Helper/BoardRenderer';
import './Main.css';

function loadMain() {
  const main = document.createElement('main');
  main.appendChild(renderBoard());

  return main;
}

export default loadMain;