import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";


////create and export context
export const AuthContext = React.createContext({});

//custom provider component
function AuthContextProvider ({ children }) {

    //useState for isAuthenticated
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });

    const history = useHistory();

    // const [isAdmin, setIsAdmin] = useState(false)


    // //persist on refresh
    // useEffect(() => {
    //     // check if there is a token is local storage
    //     const token = localStorage.getItem('token');
    //
    //     // Yes: get new data and put it in state
    //     if (token) {
    //         const decoded = jwt_decode(token);
    //         // getUserDetails(token, decoded);
    //         async function getUserDetails() {
    //             try {
    //                 const result = await axios(`http://localhost:8080/api/users/${decoded.sub}`,
    //                     {
    //                         headers: {
    //                             "Content-Type": "application/json",
    //                             Authorization: `Bearer ${token}`
    //                         }
    //                     })
    //                 // get user authentication
    //                 const userRole = (result.data.roles[0].name)
    //                 // if user had admin authentications, setIsAdmin to true
    //                 if (userRole === "ROLE_ADMIN") {
    //                     setIsAdmin(true)
    //                 }
    //                 toggleIsAuth({
    //                     ...isAuth,
    //                     isAuth: true,
    //                     user: {
    //                         id: result.data.id,
    //                         email: result.data.email,
    //                         username: result.data.username,
    //                         role: result.data.roles[0].name,
    //                     },
    //                     status: "done"
    //                 })
    //             } catch (e) {
    //                 localStorage.clear()
    //                 console.error(e)
    //             }
    //         }
    //         if (token) {
    //             getUserDetails()
    //         }
    //     }
    //     // No:
    //     else {
    //         toggleIsAuth({
    //             ...isAuth,
    //             isAuth: false,
    //             user: null,
    //             status: 'done',
    //         });
    //     }
    //
    // }, []);

    // mounting
    useEffect(() => {
        // get token
        const token = localStorage.getItem('token');

        // get userdata
        if (token) {
            const decoded = jwt_decode(token);
            getUserDetails(decoded.sub, token);
        } else {
            // no userdata
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);


    //use this function in login- and mounting-effect
    async function getUserDetails(id, token, pushLink) {
        try {
            //get userdata with the token and ID of user
            const result = await axios.get(`http://localhost:3000/600/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            console.log(result);

            //put it in state
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    email: result.data.email,
                    id: result.data.id,
                    user: result.data.user,
                },
                status: 'done',
            });
            //if there is a redirect url (not with mount-effect)
            if(pushLink) {
                history.push(pushLink);
            }
        } catch (e) {
            console.error(e);
            //no data in state
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    function logIn(token) {
        //put token in local storage
        localStorage.setItem('token', token);
        //decode it to get id of user and data for context
        const decoded = jwt_decode(token);
        console.log(decoded);

        //give id token and pushlink to function
        getUserDetails(decoded.sub, token, "/userprofilepage");
        console.log("User logged in");

        // localStorage.setItem("token", token)
        // const decoded = jwt_decode(token)
        //
        // try {
        //     const result = await axios(`http://localhost:8080/api/users/${decoded.sub}`,
        //         {
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 Authorization: `Bearer ${token}`
        //             }
        //         })
        //
        //     toggleIsAuth({
        //         ...isAuth,
        //         isAuth: true,
        //         user: {
        //             id: result.data.id,
        //             email: result.data.email,
        //             username: result.data.username,
        //         },
        //         status: "done"
        //     })
        //     if (result.data.roles[0].name === "ROLE_ADMIN") {
        //         setIsAdmin(true)
        //     }
        // } catch (e) {
        //     console.error(e)
        // }
        // history.push("/agenda")
        // console.log("User is logged in, agenda now available")

    }

    function logOut() {
        //take token out of storage
        localStorage.clear();

        //take data out of state
        toggleIsAuth({
            ...isAuth,
            isAuth: false,
            user: null,
            status: "done"
        });
        // setIsAdmin(false)
        console.log("User logged out")
        history.push("/")
    }

    const data = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        logIn,
        logOut,
        // isAdmin,
    }

    //wrap it in a provider, value is the data object
    return (
        <AuthContext.Provider value={data}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;