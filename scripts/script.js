
    let radius = document.getElementById(".form_input").value;
    let area = (radius**2) * 3.14;
    const p_result = document.querySelector(".form_result")
    p_result.innerHTML = "Площадь равна: " + area;
