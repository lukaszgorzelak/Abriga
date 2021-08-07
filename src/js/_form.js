const form = document.querySelector("form#contactForm");
const inputName = form.querySelector("input[name=firstname]");
const inputMail = form.querySelector("input[name=mail]");
const inputPhone = form.querySelector("input[name=phone]");
const textarea = form.querySelector("textarea[name=message]");
const formMessage = form.querySelector(".form-message");
const cooperationForm = document.querySelector("div.cooperation__form");

const Validation = function(){

form.setAttribute("novalidate", true);

form.addEventListener("change", e => {
  if(inputName.checkValidity()) {
       inputName.classList.remove("invalid");
       inputName.classList.add("valid");
   }
   if(inputMail.checkValidity()) {
     inputMail.classList.remove("invalid");
     inputMail.classList.add("valid");
   }
 
  if(inputPhone.checkValidity()) {
     inputPhone.classList.remove("invalid");
     inputPhone.classList.add("valid");
   }

   if(textarea.value) {
    textarea.classList.remove("invalid");
    textarea.classList.add("valid");
  }
 });

form.addEventListener("submit", e => {
  e.preventDefault();
  
  let formErrors = [];

  if (!inputName.checkValidity()) {
      formErrors.push("IMIĘ");
      inputName.classList.remove("valid");
      inputName.classList.add("invalid");
  }

  if (!inputMail.checkValidity()) {
      formErrors.push("ADRES E-MAIL");
      inputMail.classList.remove("valid");
      inputMail.classList.add("invalid");
  }

  if (!inputPhone.checkValidity()) {
    formErrors.push("NUMER TELEFONU");
    inputPhone.classList.remove("valid");
    inputPhone.classList.add("invalid");
}

if (!textarea.value) {
    formErrors.push("TREŚĆ WIADOMOŚCI");
    textarea.classList.remove("valid");
    textarea.classList.add("invalid");
}

  if (!formErrors.length) {
    
    cooperationForm.innerHTML = `
          <div class="success">
          <h4>SUKCES</h4>
          <i class="fa fa-check-circle-o" aria-hidden="true"></i>
          </div>
          `;
          
      e.target.submit();
  } else {
      formMessage.innerHTML = `
          <h4 class="form-error-title">Wypełnij te pola:</h4>
          <ul class="form-error-list">
              ${formErrors.map(el => `<li>${el}</li>`).join("")}
          </ul>
      `;
  }
});
}

export { Validation }