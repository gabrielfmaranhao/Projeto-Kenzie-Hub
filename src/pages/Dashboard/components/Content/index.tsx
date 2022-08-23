import { ButtonModal, Container, DivContent, DivHeader, DivNavegation, Loading } from "./styles";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { ModalTech } from "../ModalTechs";
import Modal from 'react-modal';
import { DivModal } from "../ModalAddTechs";
import { ModalEu } from "../Modal";
import { motion } from "framer-motion";
import { ITechs, RoutesContext } from "../../../../contexts/RoutesFunctions";
import  {TechsContext } from "../../../../contexts/TechsFunctions";


const Dashboard = () => {
    const {user,techs} = useContext(RoutesContext);
    const {setRenderTech} = useContext(TechsContext);
    const history = useHistory();
    const [ modalIsOpen, setModalIsOpen] = useState(false);
    const [ modalTechOpen, setModalTechOpen] = useState(false);
    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal () {
        setModalIsOpen(false);
    }
    function exitDashboard () {
        localStorage.clear()
        history.push("/")
    }
    function openModalTech(card:ITechs) {
        setModalTechOpen(true)
        setRenderTech(card)
    }
    function closeModalTech() {
        setModalTechOpen(false)
    }
    if(!user) {
        return <Loading>...Loading</Loading>
    }
    const customStyles = {
        overlay: {
            backgroundColor: " rgba(18, 18, 20, 0.5);"
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)' ,
            padding: "0px",
            border: "none",
            overflow: "none"
        },
};
    return( 
    <motion.div
            initial    = {{ opacity: 0 }}
            animate    = {{ opacity: 1 }}
            exit       = {{ opacity: 0 }}
            transition = {{ duration: 0.5 }} 
    >
        <nav>
            <DivNavegation>
                <h1>Kenzie Hub</h1>
                <button onClick={exitDashboard}>Sair</button>
            </DivNavegation>
        </nav>
        <header>
            <DivHeader>
                <h2>Olá,{user?.name}</h2>
                <p>{user?.course_module}</p>
            </DivHeader>
        </header>
        <Container>
            <div className="divNav">
                <h2>Tecnologias</h2>
                <button onClick={openModal}>+</button>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                    <DivModal closeModal={closeModal}/>
                </Modal>
            </div>
            <DivContent>
                <ul> 
                    {techs?.map((card:ITechs)=>
                        <li key={card.id}>
                            <ButtonModal key={card.id} onClick={()=>openModalTech(card)}>
                                <h3>{card.title}</h3>
                                <span>{card.status}</span>
                            </ButtonModal>
                        </li>
                    )}
                </ul>
            </DivContent>
            {modalTechOpen &&
                <ModalEu >
                    <ModalTech closeModalTech={closeModalTech}/>
                </ModalEu>}
        </Container>
    </motion.div>)
}

export default Dashboard