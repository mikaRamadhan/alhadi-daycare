// Form contact
const scriptURL =
  "https://script.google.com/macros/s/AKfycbx1r-aCHQ-ZdB23Nh9xpUPosao4Y7380HxA-6SLaiqMymK1X4QzRDerYMomtVaPrVC7Dw/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thank you! Form is submitted"))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
