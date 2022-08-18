import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const RoutesContext = createContext();

export const RoutesProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@Kenzie-Hub:token");
      if (token) {
        try {
          axios.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await axios.get(
            "https://kenziehub.herokuapp.com/profile"
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
  function avancedLogin(response) {
    localStorage.clear();
    const { user: userResponse, token } = response.data;
    setUser(userResponse);
    setTechs(userResponse.techs);
    localStorage.setItem("@Kenzie-Hub:token", token);
    axios.defaults.headers.authorization = `Bearer ${token} `;
    history.push("/dashboard");
  }
  async function signIn(data) {
    localStorage.clear();
    await axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => avancedLogin(response))
      .catch((err) => toast.error("Email ou senha Invalidos"));
  }
  function onSubmit(data) {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
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
