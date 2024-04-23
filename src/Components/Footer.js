import "./Footer.css";
import pizza from '../assets/images/pizza.jpg';

function loadFooter() {
  const content = document.querySelector('#content');

	const footer = document.createElement("footer");

	const text = document.createElement("i");
	text.textContent = "Another day, Another project";
	text.classList.add("credit");

	const githubPage = document.createElement("a");
	githubPage.href = "https://github.com/peetzaecksdee";
	githubPage.classList.add("credit-a");
  githubPage.target = "_blank";

	const githubImage = new Image();
	githubImage.src = pizza;
	githubImage.alt = "my profile";

	githubPage.appendChild(githubImage);

	footer.appendChild(text);
	footer.appendChild(githubPage);

	content.appendChild(footer);
}

export default loadFooter;