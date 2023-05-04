function calculate(radius) {
 
    let area = (radius**2) * 3.14;
    const p_result = document.querySelector(".form__result")
    p_result.innerHTML = "Площадь равна: " + area;
}
calculate(r)