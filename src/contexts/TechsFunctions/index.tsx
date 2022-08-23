import { createContext, Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { useContext } from "react";
import { IChildrenProvider, ITechs, RoutesContext} from "../RoutesFunctions";
import { useState } from "react";
import { requests } from "../../requests";


interface IDataNewTechs {
    title: string
    status: string
}
interface IDataUpdateTechs {
    status: string
}
interface ITechsContextValues {
    renderTech: ITechs | undefined
    setRenderTech: Dispatch<SetStateAction<ITechs | undefined>>
    newTechs: (data:IDataNewTechs) => void
    updateTechs: (data:IDataUpdateTechs) => void
    deleteTechs: ()=>void
}


export const TechsContext = createContext<ITechsContextValues>({} as ITechsContextValues);
export const TechsProvider = ({ children }:IChildrenProvider) => {
    const {techs, setTechs} = useContext(RoutesContext);
    const [renderTech, setRenderTech] = useState<ITechs | undefined>()
    async function newTechs (data:IDataNewTechs) {
        await requests.post("/users/techs", data)
        .then((response)=> {
            setTechs([...techs, response.data])
            toast.success("Nova Tecnologia Criada")
        })
        .catch((erro)=>toast.error("Tecnologia já exite,Você tem a opção de fazer o update dos statos"))
    }
    async function updateTechs (data:IDataUpdateTechs) {
        await requests.put(`/users/techs/${renderTech?.id}`,data)
        .then(async(response)=>{
            const {data} = await requests.get("/profile");
            setTechs(data.techs)
            toast.success("Status Atualizado")
        })
        .catch((erro)=> console.log(erro));
    }
    async function deleteTechs () {
        requests.delete(`/users/techs/${renderTech?.id}`)
        .then( async(response)=>{toast.success("Tecnologia Deletada com sucesso!")
            const {data} = await requests.get("/profile");
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

