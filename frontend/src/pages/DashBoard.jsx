import { Appbar } from "../components/AppBar.jsx";
import { Balance } from "../components/Balance.jsx";
import { Users } from "../components/Users.jsx";


export function DashBoard(){
    return(
        <div>
            <Appbar/>
            <div className="m-8">
                <Balance value={"10,000"}/>
                <Users/>
            </div>
        </div>
    )
}