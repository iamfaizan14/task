import React  from "react";
import {Link,Outlet} from 'react-router-dom';


export const Navigation=()=>{
    return(
        <div>
            
            <div>
            <Link to="/nav/home">Home</Link>
            <Link to="/nav/task">Task</Link>
            <Link to="/nav/user">User</Link>
            </div>
            <Outlet/>
        </div>
    )
}
