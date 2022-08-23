import * as yup from "yup";
export const  formSchema = yup.object().shape({
    email   : yup.string().required("Email requerido"),
    password: yup.string().required("Senha requerida"),
})