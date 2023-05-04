let form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const r = +document.querySelector('.form__input').value;
	console.log(r);
	square(r);
});

const square = (r) => {
	let result = 3.1415 * r ** 2;
	const resultElement = document.querySelector('.form__result');
	resultElement.innerText = `Площадь равна: ${result}`;
};
