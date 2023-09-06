const amount = document.getElementById("amount");
const qurrency = document.getElementById("qurrency");
const qonvert = document.getElementById("qonvert");
const result = document.getElementById("result");

const apiKEY = "Vt9lhZQNlFtHBqvuZfTPBA==O9w0wbobIJIFIKkG";
const apiURL = "https://api.api-ninjas.com/v1/exchangerate?pair=USD";

qonvert.addEventListener("click", () => {
    const amountTOTAL = amount.value;
    const qurrencyTOTAL = qurrency.value;
    const url = apiURL + qurrencyTOTAL;

    fetch(url, {
        headers: {
            "X-Api-Key": apiKEY
        }
    })
        .then(response => response.json())
        .then(data => {
            const rate = data.exchange_rate;
            const resultMuch = amountTOTAL * rate;
            result.innerHTML = `${amount} ${qurrency} = ${resultMuch.toFixed(2)} USD`;
        })
        .catch(error => {
            console.error("Request Failed: ", error);
            result.innerHTML = "We an Error!";
        });
});
