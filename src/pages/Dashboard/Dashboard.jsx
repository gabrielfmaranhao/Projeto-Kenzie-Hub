import React from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { RoutesContext } from "../../contexts/RoutesFunctions";
import Dashboard from "./components/Content";

const  DashboardPage = () => {
    const {user, loading} = useContext(RoutesContext);
    const history = useHistory();
    if (loading) {
        return <div>Carregando...</div>
    }
    return  user ? <Dashboard/> : history.push("/") ; 
};

export default DashboardPage