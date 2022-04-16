const title = document.querySelector('.header__autotyping');

const words = ['Hello!'];

let word = '';
let i = 0;
let j = 0;
let isEnd = false;
let isDeleting = false;
let interval;

const autoTypingHandler = () => {
	if (j === words.length) {
		j = 0;
	}

	if (i < words[j].length && !isEnd && !isDeleting) {
		word += words[j][i];
		i += 1;
	}

	if (i === words[j].length && !isEnd && !isDeleting) {
		i = 0;
		j += 1;
		isEnd = true;
	}

	if (isDeleting) {
		word = word.slice(0, -1);
	}

	if (isEnd) {
		clearInterval(interval);
		setTimeout(() => {
			interval = setInterval(() => {
				autoTypingHandler();
			}, 150);
		}, 600);
		isEnd = false;
		isDeleting = true;
	}

	if (word.length === 0) {
		isDeleting = false;
	}

	title.textContent = word;
};

const run = () => {
	interval = setInterval(() => {
		autoTypingHandler();
	}, 100);
};

run();
