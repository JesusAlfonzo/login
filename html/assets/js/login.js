const userNameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const emailField = document.getElementById("email");

const validateEmptyField = (e) => {
    // Validación para mensaje de error en el username
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length === 0) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = `${field.name} Es requerido`;
    }

    // Eliminación de mensaje de error cuando detecta que si hay un valor en el field
    else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
};

const validateEmailFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Ingrese un email valido";
    }
    else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }

}

// Llamamos a la función anteriormente creada para cada field
userNameField.addEventListener("blur", validateEmptyField);
emailField.addEventListener("blur", validateEmptyField);
passwordField.addEventListener("blur", validateEmptyField);

emailField.addEventListener("input", validateEmailFormat)
