import { Route, Switch } from "react-router-dom"
import Dashboard from "../components/Dashboard"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"

const Routes = () => {
    return (
        <Switch>
            <Route exact path= "/" ><Login/></Route>
            <Route exact path={"/register"}><Register/></Route>
            <Route exact path={"/dashboard"}><Dashboard/></Route>
        </Switch>
    )
}
export default Routes 