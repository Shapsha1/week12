let weightInput = document.querySelector("#weight");
let heightInput = document.querySelector("#height");
let button = document.querySelector("#BMIbutton");
const calculateBMI = (h, w) => {
    let height = parseFloat(h);
    let weight = parseFloat(w);
    // проверка, что введены числа
    if (isNaN(weight) || isNaN(height)) {
        let notice = document.createElement("p");
        notice.textContent = `Введите ваши данные`;
        button.after(notice);
    } else {
        const powedHight = Math.pow(height / 100, 2);
        let BMI = weight / powedHight;
        BMI = Math.round(BMI * 100) / 100;
        let result = document.createElement("p");
        result.textContent = `Ваш ИМТ: ${BMI}`;
        button.after(result);
    }
};
button.addEventListener("click", function () {
    calculateBMI(heightInput.value, weightInput.value);
});
