export default function gameTextChanger(text) {
  const gameText = document.querySelector('.game-text');

  gameText.textContent = text;
}