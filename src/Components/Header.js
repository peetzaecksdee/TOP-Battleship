import './Header.css';

function loadHeader() {
  const header = document.createElement('header');

  const headerText = document.createElement('span');
  headerText.classList.add('header-text');
  headerText.textContent = 'Battleship Gaem';

  header.appendChild(headerText);

  return header;
}

export default loadHeader;