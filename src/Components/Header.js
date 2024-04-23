import './Header.css';

function loadHeader() {
  const content = document.querySelector('#content');

  const header = document.createElement('header');

  const headerText = document.createElement('span');
  headerText.classList.add('header-text');
  headerText.textContent = 'Battleship Gaem';
  
  const gameText = document.createElement('span');
  gameText.classList.add('game-text');
  gameText.textContent = 'Welcome to the gaem!';

  header.appendChild(headerText);
  header.appendChild(gameText);

  content.appendChild(header);
}

export default loadHeader;