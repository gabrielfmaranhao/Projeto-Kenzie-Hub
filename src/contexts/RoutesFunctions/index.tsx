import { requests } from "../../requests";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";


export interface IChildrenProvider {
  children: ReactNode
}
interface IResponseRequisition {
  config: object 
  data: IDataRequisition
  headers: object 
  status : number 
  statusText : string
}
interface IDataRequisition {
  user: Iuser
  token: string
}
interface Iuser {
  id: string
  name: string
  email: string
  course_module: string
  bio: string
  contact: string
  techs?: ITechs[] 
}
export interface ITechs {
  id: string
  title: string
  status: string
}
export interface ILogin {
  email: string
  password: string
}
interface IRegister {
  email: string
  password: string
  name: string
  bio: string
  contact: string
  course_module: string
}
interface IRoutesContextValues {
  user: Iuser | undefined
  loading: boolean
  techs: ITechs[] | undefined | any
  signIn: (data: ILogin) => void
  onSubmit: (data: IRegister) => void
  setTechs: Dispatch<SetStateAction<ITechs[] | undefined>>
}



export const RoutesContext = createContext<IRoutesContextValues>({} as IRoutesContextValues);
export const RoutesProvider = ({ children }:IChildrenProvider) => {
  const history = useHistory();
  const [user, setUser] = useState<Iuser>();
  const [techs, setTechs] = useState<ITechs[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@Kenzie-Hub:token");
      if (token) {
        try {
          const { data } = await requests.get(
            "/profile"
          );
          setUser(data);
          setTechs(data.techs);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);
  function avancedLogin(response:IResponseRequisition) {
    localStorage.clear();
    const { user: userResponse, token } = response.data;
    setUser(userResponse);
    setTechs(userResponse.techs);
    localStorage.setItem("@Kenzie-Hub:token", token);
    history.push("/dashboard");
  }
  async function signIn(data: ILogin) {
    localStorage.clear();
    await requests
      .post("/sessions", data)
      .then((response) => avancedLogin(response))
      .catch((err) => toast.error("Email ou senha Invalidos"));
  }
  function onSubmit(data: IRegister) {
    requests
      .post("/users", data)
      .then((response) => toast.success("Conta criada com sucesso !"))
      .catch(() => toast.error("Email já existente"));
  }
  return (
    <RoutesContext.Provider
      value={{ user, signIn, loading, techs, onSubmit, setTechs }}
    >
      {children}
    </RoutesContext.Provider>
  );
};
