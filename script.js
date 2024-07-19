const getSubscribeButton = document.getElementById("subscribe-button");
const getErrorMessage = document.getElementById("error-message");
const inputEmail = document.getElementById("email-address");

let inputText = "";

inputEmail.addEventListener("input", (event) => {
  inputText = event.target.value;
});

getSubscribeButton.addEventListener("click", () => {
  if (inputText.length > 0) {
    getErrorMessage.style.display = "block";
  }
});
