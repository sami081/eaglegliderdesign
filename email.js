const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function SendMail() {
  var params = {
    companyName: document.getElementById("companyName").value,
    siret: document.getElementById("siret").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    adress: document.getElementById("adress").value,
    lastName: document.getElementById("lastName").value,
    firstName: document.getElementById("firstName").value,
    email: document.getElementById("email").value,
    object: document.getElementById("object").value,
    message: document.getElementById("message").value,
  };

  if (
    params.lastName &&
    params.firstName &&
    params.email &&
    params.object &&
    params.phoneNumber &&
    params.adress && 
    params.message
  ) {
    emailjs
      .send("service_pq1jwhg", "template_zkq9xfl", params)
      .then(function (res) {
        console.log(res.status);
        form.innerHTML = `<div class="all-back"><div class="div-back"> <p> Votre demande a bien été pris en compte </p> 
        <a href="./contact.html" class="back"> Revenir au formulaire </a></div></div>`;
      });
  } else {
    alert("Veuillez remplir correctement le formulaire");
  }
}
