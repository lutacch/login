import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
			
				<div className="ml-auto">
					{!store.token ? 
					<Link to="/login">
					<button className="btn btn-primary">log in</button>
				</Link> :
				
				<button onClick={()=>{actions.logout()}} className="btn btn-primary">Logout</button>
		
				}
					
				</div>
			</div>
		</nav>
	);
};
