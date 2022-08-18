import { Container, DivForm, DivSpan, Form } from "./styles";
import { useForm } from "react-hook-form";
import { formSchema } from "../../utils/validation/validationLogin";
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useContext } from "react";
import { motion } from "framer-motion";
import { RoutesContext } from "../../contexts/RoutesFunctions";


const Login = () => { 
    const {signIn} = useContext(RoutesContext);
    const history = useHistory()
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(formSchema)})
    return (
        <motion.div 
            initial    = {{ opacity: 0 }}
            animate    = {{ opacity: 1 }}
            exit       = {{ opacity: 0 }}
            transition = {{ duration: 0.5 }} 
        >
            <Container> 
                <h1>Kenzie Hub</h1>
                <DivForm>
                    <h2>Login</h2>
                    <Form onSubmit={handleSubmit(signIn)}>
                        <label htmlFor="email">Email</label>
                        <input type={"email"} placeholder="Email" {...register("email")} id="email"/>
                        <span>{errors.email?.message}</span>
                        <label htmlFor="password">Senha</label>
                        <input type={"password"} placeholder="Senha" {...register("password")} id="password"/>
                        <span>{errors.password?.message}</span>
                        <button type={"submit"}>Entrar</button>
                        
                    </Form>
                    <DivSpan>
                        <span>Ainda não possui uma conta ?</span>
                        <button onClick={()=> history.push("/register")}>Cadastre-se</button>
                    </DivSpan>
                </DivForm>
                <ToastContainer theme="dark" />
            </Container>
        </motion.div>
    );
};

export default Login;