import React from "react";
import { useHistory } from "react-router-dom";
import { Container, DivNav, DivContainer, DivInfomation, Form } from "./styles";
import { useForm } from "react-hook-form";
import { Validations } from "../../validation/validationRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";
import { useContext } from "react";
import { RoutesContext } from "../../contexts/RoutesFunctions";
const Register = () => {
    const history = useHistory();
    const {register, handleSubmit, formState: {errors}} = useForm({resolver:yupResolver(Validations)});
    const { onSubmit } = useContext(RoutesContext)
    return (
    <motion.div
            initial    = {{ opacity: 0 }}
            animate    = {{ opacity: 1 }}
            exit       = {{ opacity: 0 }}
            transition = {{ duration: 0.5 }} >
        <Container>
            <DivNav>
                <h2>Kenzie Hub</h2>
                <button onClick={()=>history.push("/")}>Voltar</button>
            </DivNav>
            <DivContainer>
                <DivInfomation>
                    <h3>Crie sua conta</h3>
                    <p>Rápido e grátis, vamos nessa</p>
                </DivInfomation>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Nome</label>
                    <input placeholder="Digite aqui seu nome" {...register("name")} id="name"/>
                    <span>{errors.name?.message}</span>
                    <label htmlFor="email">Email</label>
                    <input type={"email"} placeholder="Digite aqui seu email" {...register("email")} id="email"/>
                    <span>{errors.email?.message}</span>
                    <label htmlFor="password">Senha</label>
                    <input type={"password"} placeholder="Digite aqui sua senha" {...register("password")} id="password"/>
                    <span>{errors.password?.message}</span>
                    <label htmlFor="confirmPassword">Confirme sua senha</label>
                    <input type={"password"} placeholder="Digite sua senha novamente"{...register("confirmPassword")}id="confirmPassword" />
                    <span>{errors.confirmPassword?.message}</span>
                    <label htmlFor="bio">Biografia</label>
                    <input type={"text"} placeholder="Fale sobre você" {...register("bio")} id="bio"/>
                    <span>{errors.bio?.message}</span>
                    <label htmlFor="contact">Contato</label>
                    <input type={"url"} placeholder="Opção de contato" {...register("contact")} id="contact"/>
                    <span>{errors.contact?.message}</span>
                    <label>Selecionar módulo</label>
                    <select {...register("course_module")}>
                        <option>Primeiro módulo (Introdução ao Frontend)</option>
                        <option>Segundo módulo (Frontend Avançado)</option>
                        <option>Terceiro módulo (Introdução ao Backend)</option>
                        <option>Quarto módulo (Backend Avançado)</option>
                    </select>
                    <span>{errors.course_module?.message}</span>
                    <button type={"submit"}>Cadastrar</button>
                </Form>
            </DivContainer>
            <ToastContainer theme="dark"/>
        </Container>
    </motion.div>
    );
};

export default Register