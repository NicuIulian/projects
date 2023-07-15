const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const emailAddress = document.getElementById("email");
const password = document.getElementById("password");
const buttonSubmit = document.getElementsByClassName("form_input-submit")[0];

buttonSubmit.addEventListener("click", function(event) {
  event.preventDefault();

  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = emailAddress.value.trim();
  const passwordValue = password.value.trim();

  if (fnameValue === "") {
    fname.classList.add("error");
    document.getElementById("fnameError").textContent = "First name cannot be empty";
    showIcon(fname);
  } else {
    fname.classList.remove("error");
    document.getElementById("fnameError").textContent = "";
    hideIcon(fname);
  }

  if (lnameValue === "") {
    lname.classList.add("error");
    document.getElementById("lnameError").textContent = "Last name cannot be empty";
    showIcon(lname);
  } else {
    lname.classList.remove("error");
    document.getElementById("lnameError").textContent = "";
    hideIcon(lname);
  }

  if (emailValue === "") {
    emailAddress.classList.add("error");
    document.getElementById("emailError").textContent = "Looks like this is not an email :p";
    showIcon(emailAddress);
  } else {
    emailAddress.classList.remove("error");
    document.getElementById("emailError").textContent = "";
    hideIcon(emailAddress);
  }

  if (passwordValue === "") {
    password.classList.add("error");
    document.getElementById("passwordError").textContent = "Password cannot be empty";
    showIcon(password);
  } else {
    password.classList.remove("error");
    document.getElementById("passwordError").textContent = "";
    hideIcon(password);
  }
});

function showIcon(input) {
  const icon = input.nextElementSibling;
  icon.style.display = "inline-block";
}

function hideIcon(input) {
  const icon = input.nextElementSibling;
  icon.style.display = "none";
}


