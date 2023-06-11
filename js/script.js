const form = document.getElementById('form');
const email = document.getElementById('email');
const news = document.getElementById('news');
const success = document.getElementById('succes');
//Show input error messages
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'news__form error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}
//check email is valid
function checkEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(re.test(input.value.trim())) {
		news.style.display = 'none'
		success.style.display = 'flex';
	} else {
		showError(input, 'Valid email required');
	}
}
//Event Listeners
form.addEventListener('submit', function(e) {
	e.preventDefault();
	checkEmail(email);
});