import { Container, DivForm } from "./styles";
import { useForm } from "react-hook-form";
import { ValidationTechs } from "../../validation/validationAddTechs";
import {yupResolver} from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";
import { TechsContext } from "../../contexts/TechsFunctions";

export const DivModal = ({closeModal}) => {
    const { newTechs} = useContext(TechsContext)
    const {register, handleSubmit, formState: {errors}} = useForm({resolver:yupResolver(ValidationTechs)})
    return(
        <motion.div 
        initial    = {{ opacity: 0 }}
        animate    = {{ opacity: 1 }}
        exit       = {{ opacity: 0 }}
        transition = {{ duration: 0.5 }}>
            <Container>
                <div className="DivFecharModal">
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={()=>closeModal()}>x</button>
                </div>
                <DivForm>
                    <form onSubmit={handleSubmit(newTechs)}>
                        <label htmlFor="name_techs">Nome</label>
                        <input type={"text"} placeholder = "Nome da tecnologia" {...register("title")} id="name_techs"/>
                        <span>{errors.title?.message}</span>
                        <label>Selecionar status</label>
                        <select {...register("status")}>
                            <option>Iniciante</option>
                            <option>Intermediário</option>
                            <option>Avançado</option>
                        </select>
                        <span>{errors.status?.message}</span>
                        <button>Cadastrar Tecnologia</button>
                    </form>
                </DivForm>
                <ToastContainer theme="dark"/>
            </Container>
        </motion.div>
    )
}