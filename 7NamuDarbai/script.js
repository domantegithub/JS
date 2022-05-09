const ageInput = document.getElementById("age");
const form = document.querySelector("form");
const priceDisplay = document.getElementById("price-result");

function handleFormSubmit(event) {
  event.preventDefault()
  const price = 6;
  const age = Number(ageInput.value);

  if (age >= 60) {
    priceDisplay.textContent = (0.5 * price).toFixed(2);
  } else if (age < 18) {
    priceDisplay.textContent = (0.45 * price).toFixed(2);
  } else {
    priceDisplay.textContent = price.toFixed(2);
  }
}

form.addEventListener("submit", handleFormSubmit);