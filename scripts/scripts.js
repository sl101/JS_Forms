const Square = () => {
  const r = document.querySelector('.form__input').value
  let result = 3.1415 * r ** 2
  document.querySelector('.form__result').innerText = result
}
