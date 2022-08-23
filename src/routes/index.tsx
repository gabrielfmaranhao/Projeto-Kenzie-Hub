import { Route, Switch } from "react-router-dom"
import DashboardPage from "../pages/Dashboard/Dashboard"

import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"

const Routes = () => {
    return (
        <Switch>
            <Route exact path= "/" ><Login/></Route>
            <Route exact path={"/register"}><Register/></Route>
            <Route exact path={"/dashboard"}><DashboardPage/></Route>
        </Switch>
    )
}
export default Routes 