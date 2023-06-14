//Haz tú validación en javascript acá

const form = document.querySelectorAll(".contacto input,textarea");
const btn = document.querySelector(".contacto__btn");
//const warning= document.querySelectorAll(".contacto span");

const typeError = [
    "badInput",
    "patternMismatch",
    "tooLong",
    "tooShort",
    "valueMissing",
];
const messageError = {
    nombre: {
        badInput: "nombre invalido",
        patternMismatch: "ingrese un nombre sin numeros,caracteres y acentos ",
        tooLong: "ingrese un nombre y apellido de maximo 40",
        tooShort: "ingrese un nombre mayor a 4 letras",
        valid: false,
        valueMissing: "ingrese un nombre",
    },
    "e-mail": {
        badInput: "correo invalido para procesar",
        patternMismatch: "escribe un correo valido  como example@gmail.com",
        tooLong: "email muy largo",
        tooShort: "email pequeño",
        valueMissing: "ingrese un correo",
    },
    asunto: {
        badInput: "asunto invalido",
        patternMismatch:
            "ingrese un asunto valido sin numeros y caracteres especiales",
        tooLong: "ingrese un asunto de maximo 40 letras",
        tooShort: "ingrese un asunto mayor a 4 letras",
        valueMissing: "escriba un asunto",
    },
    mensaje: {
        badInput: "entrada invalida",
        patternMismatch: "ingrese mensaje sin caracteres expeciales",
        tooLong: "mensaje muy largo",
        tooShort: "mensaje muy pequeño",
        valueMissing: "escriba un mensaje ",
    },
};
form.forEach((input) => {
    input.addEventListener("blur", (e) => {
        const event = e.target;
        const valid = e.target.validity;
        const type = e.target.dataset.type;
        //console.log(type,valid,event);

        if (valid.valid) {
            event.parentElement.classList.remove("container--valid");
            event.parentElement.querySelector(".error").innerHTML = "";
        } else {
            typeError.forEach((error) => {
                if (valid[error]) {
                    event.parentElement.classList.add("container--valid");
                    event.parentElement.querySelector(".error").innerHTML =
                        messageError[type][error];
                }
            });
        }
    });
});

btn.addEventListener("click", (e) => {
    e.preventDefault();
});
