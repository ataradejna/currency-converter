{
    const welcome = () => {
        console.log("Cześć wszystkim");
    };

    const resultElement = document.querySelector(".js-result");

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.56;
        const rateGBP = 5.22;
        const rateUSD = 3.77;

        switch (currency) {
            case "EUR":
                currencyName = "Euro";
                return amount / rateEUR;

            case "GBP":
                currencyName = "Funtów";
                return amount / rateGBP;


            case "USD":
                currencyName = "Dolarów";
                return amount / rateUSD;

            default:
                resultElement.innerText = "Przepraszamy,coś poszło nie tak";
        };
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyELement = document.querySelector(".js-currency");

        const currency = currencyELement.value;
        const amount = +amountElement.value;

        let result = calculateResult(amount, currency);
        const sentence = "Otrzymasz";

        resultElement.innerText = `${sentence} ${result.toFixed(2)} ${currencyName}`;
    };

    const onFormReset = () => {
        resultElement.innerText = ""
        console.log("Formularz został zresetowany");

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("reset", onFormReset);
       
    };

    welcome();
    init();

}