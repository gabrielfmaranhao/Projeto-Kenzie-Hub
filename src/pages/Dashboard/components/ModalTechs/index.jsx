import { DivForm,Container } from "../ModalTechs/styles"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { ToastContainer } from "react-toastify"
import { motion } from "framer-motion"
import { TechsContext } from "../../../../contexts/TechsFunctions"
export const ModalTech = ({closeModalTech}) => {
    const {updateTechs, deleteTechs, renderTech} = useContext(TechsContext);
    const {register, handleSubmit} = useForm();
    return(
        <motion.div
        initial    = {{ opacity: 0 }}
        animate    = {{ opacity: 1 }}
        exit       = {{ opacity: 0 }}
        transition = {{ duration: 0.5 }}
        >
            <Container>
                <div className="DivFecharModalTechs">
                    <h3>Tecnologia Detalhes</h3>
                    <button onClick={closeModalTech}>x</button>
                </div>
                <DivForm>
                    <form onSubmit={handleSubmit(updateTechs)}>
                        <label htmlFor="name_techs">Nome</label>
                        <input type={"text"} placeholder = {renderTech.title} id="name_techs"/>
                        <label>Status</label>
                        <select {...register("status")}>
                            <option>Iniciante</option>
                            <option>Intermediário</option>
                            <option>Avançado</option>
                        </select>
                        <button type={"submit"}>Salvar Alterações</button>
                    </form>
                    <button className="buttonDelete" onClick={deleteTechs}>Excluir</button>
                </DivForm>
                <ToastContainer theme="dark" />
            </Container>
        </motion.div>
    )
}