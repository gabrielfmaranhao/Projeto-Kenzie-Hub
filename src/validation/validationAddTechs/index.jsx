import * as yup from "yup"

export const ValidationTechs = yup.object().shape({
    title: yup.string().required("Tecnologia Obrigatória"),
    status: yup.string().required("status Obrigatório")
})