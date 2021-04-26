console.log("Cześć")

let formElement = document.querySelector(".js-form");
let fieldElement = document.querySelector(".js-field");
let currencyElement = document.querySelector(".js-currency");
let submitButton = document.querySelector(".js-submitButton");
let resultElement = document.querySelector(".js-result");
let resetButton = document.querySelector("js-resetButton");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let rateEUR = 4.56;
    let rateGBP = 5.22;
    let rateUSD = 3.77;

    let plnAmount = +fieldElement.value;
    let currency = currencyElement.value;

    let sentence = "Otrzymasz";

    switch (currency) {
        case "EUR":
            result = (plnAmount / rateEUR).toFixed(2);
            resultElement.innerText = `${sentence} ${result} euro`;
            break;

        case "GBP":
            result = (plnAmount / rateGBP).toFixed(2);
            resultElement.innerText = `${sentence} ${result} funtów`;
            break;

        case "USD":
            result = (plnAmount / rateUSD).toFixed(2);
            resultElement.innerText = `${sentence} ${result} dolarów`;
            break;
        default:
            resultElement.innerText = "Przepraszamy, coś poszło nie tak";
    }

    formElement.addEventListener("reset", () => {
        resultElement.innerText = "";
        console.log("formularz został zresetowany")
    })
})