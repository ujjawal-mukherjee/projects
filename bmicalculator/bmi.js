const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `pls enter a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `pls enter a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span> ${bmi} </span>`;
        if (bmi < 18.5) {
            result.innerHTML += `<br><span>Category: Underweight</span>`;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result.innerHTML += `<br><span>Category: Normal weight</span>`;
        } else if (bmi >= 25 && bmi <= 29.9) {
            result.innerHTML += `<br><span>Category: Overweight</span>`;
        } else if (bmi >= 30 && bmi <= 35) {
            result.innerHTML += `<br><span>Category: Obese</span>`;
        } else {
            result.innerHTML += `<br><span>Category: Very severely obese (Class III)</span>`;
        }
    }
});



