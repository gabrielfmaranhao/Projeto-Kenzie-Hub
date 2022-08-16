import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const history = useHistory()
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [techs, setTechs] = useState([]);
    const [test, setTest] = useState([]);
    useEffect(()=> {
        async function loadUser () {
            const token = localStorage.getItem("@Kenzie-Hub:token")
            if(token) {
                try {
                    axios.defaults.headers.authorization = `Bearer ${token} `;
                const {data} = await axios.get("https://kenziehub.herokuapp.com/profile");
                setUser(data)
                setTechs(data.techs)
                setTest(data.techs.status)
                } catch (error) {
                    console.error(error)
                }
            } 
            setLoading(false)
        }
        loadUser();
    }, [])
    function avancedLogin (response) {
        localStorage.clear()
        const {user: userResponse, token} = response.data;
        setUser(userResponse);
        setTechs(userResponse.techs)
        localStorage.setItem("@Kenzie-Hub:token",token)
        axios.defaults.headers.authorization = `Bearer ${token} `;
        history.push("/dashboard")
    }
    const signIn = async(data) => {
        localStorage.clear()
        await axios.post("https://kenziehub.herokuapp.com/sessions", data)
        .then((response)=> avancedLogin(response))
        .catch((err)=>toast.error(err.response.data.message));
    }
    const newTechs = async(data)=> {
        await axios.post("https://kenziehub.herokuapp.com/users/techs", data)
        .then((response)=> setTechs([...techs,response.data] ,toast.success("Nova Tecnologia Criada")))
        .catch((erro)=>toast.error(erro.response.data.message))
    }
    const updateTechs = async(data) => {
        await axios.put(`https://kenziehub.herokuapp.com/users/techs/${test.id}`,data)
        .then(async(response)=>{
            const {data} = await axios.get("https://kenziehub.herokuapp.com/profile");
                setTechs(data.techs)
            toast.success("Status Atualizado")
    })
        .catch((erro)=> console.log(erro))

    }
    const deleteTechs = async() => {
        axios.delete(`https://kenziehub.herokuapp.com/users/techs/${test.id}`)
        .then( async(response)=>{toast.success("Tecnologia Deletada com sucesso!")
            const {data} = await axios.get("https://kenziehub.herokuapp.com/profile");
            setTechs(data.techs)
    })
        .catch((err)=> console.log(err))
    }
    return (
        <AuthContext.Provider value={{ user, signIn, loading, newTechs, techs, updateTechs, test, setTest, deleteTechs}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
