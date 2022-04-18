const emailInput = document.querySelector('.contact__email');
const subjectInput = document.querySelector('.contact__subject');
const messageInput = document.querySelector('.contact__message');
const submitBtn = document.querySelector('.contact__submit');
const emailWarningText = document.querySelector('.contact__email-warn');
const subjectWarningText = document.querySelector('.contact__subject-warn');
const messageWarningText = document.querySelector('.contact__message-warn');

const emailRegExp = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$');

const emailValidation = () => {
	const elementInput = emailInput.value;

	if (elementInput.length === 0) {
		emailWarningText.textContent = 'Empty field!';
		return false;
	}

	if (!elementInput.includes('@')) {
		emailWarningText.textContent = "Email should contain '@'";
		return false;
	}

	if (!emailRegExp.test(elementInput)) {
		emailWarningText.textContent = 'Invalid email!';
		return false;
	}

	return true;
};

const elementValidation = (element, maxLimit, output) => {
	const elementInput = element.value;

	if (elementInput.length === 0) {
		output.textContent = 'Empty field!';
		return false;
	}

	if (elementInput.length > maxLimit) {
		output.textContent = `Subject is too long (max. ${maxLimit} characters)`;
		console.log(output);
		return false;
	}

	return true;
};

const clearError = (output) => {
	output.textContent = '';
};

const checkValidation = (event) => {
	if (
		!(
			emailValidation() &&
			elementValidation(subjectInput, 120, subjectWarningText) &&
			elementValidation(messageInput, 500, messageWarningText)
		)
	) {
		event.preventDefault();
	}
};

submitBtn.addEventListener('click', (event) => checkValidation(event));
emailInput.addEventListener('click', () => clearError(emailWarningText));
subjectInput.addEventListener('click', () => clearError(subjectWarningText));
messageInput.addEventListener('click', () => clearError(messageWarningText));
