import * as yup from "yup";

export const Validations = yup.object().shape({
    name            : yup.string().required("Nome obrigatório"),
    email           : yup.string().required("Email obrigatório"),
    password        : yup.string().matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
                            .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
                            .matches(/(\d)/, "Deve conter ao menos 1 número")
                            .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
                            .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
    confirmPassword : yup.string().oneOf([yup.ref("password")],("A senha não é igual a sua anterior")),
    bio             : yup.string().required("Bio obrigatório"),
    contact         : yup.string().required("Contato obrigatório"),
    course_module   : yup.string().required("Módulo obrigatório")
})