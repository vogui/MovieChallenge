import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../auth0/LogoutButton"

const NavBar = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        <nav style={{ backgroundColor: '#006CFE' }}>
            {!isAuthenticated ?
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <h1 style={{ color: '#FFFFFF' }}>Movies Challenge</h1>
                </div>
                :
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                }}>
                    <img src={user.picture} alt={user.name}/>
                    <h2>{user.name}</h2>
                    <Logout/>
                </div>

            }
        </nav>
    );
};

export default NavBar;
