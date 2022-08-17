import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { RoutesContext} from "../RoutesFunctions";
import { useState } from "react";

export const TechsContext = createContext();

export const TechsProvider = ({ children }) => {
    const {techs, setTechs} = useContext(RoutesContext);
    const [renderTech, setRenderTech] = useState([])
    async function newTechs (data) {
        await axios.post("https://kenziehub.herokuapp.com/users/techs", data)
        .then((response)=> setTechs([...techs,response.data] ,toast.success("Nova Tecnologia Criada")))
        .catch((erro)=>toast.error("Tecnologia já exite,Você tem a opção de fazer o update dos statos"))
    }
    async function updateTechs (data) {
        await axios.put(`https://kenziehub.herokuapp.com/users/techs/${renderTech.id}`,data)
        .then(async(response)=>{
            const {data} = await axios.get("https://kenziehub.herokuapp.com/profile");
            setTechs(data.techs)
            toast.success("Status Atualizado")
        })
        .catch((erro)=> console.log(erro));
    }
    async function deleteTechs () {
        axios.delete(`https://kenziehub.herokuapp.com/users/techs/${renderTech.id}`)
        .then( async(response)=>{toast.success("Tecnologia Deletada com sucesso!")
            const {data} = await axios.get("https://kenziehub.herokuapp.com/profile");
            setTechs(data.techs)
    })
        .catch((err)=> console.log(err))
    }
    return (
        <TechsContext.Provider value={{ newTechs, updateTechs, deleteTechs, setRenderTech, renderTech}}>
            {children}
        </TechsContext.Provider>
    )

}

