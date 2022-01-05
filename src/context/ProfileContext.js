// import React, {createContext, useContext, useState} from 'react';
// import {AuthContext} from "./AuthContext";
//
// export const ProfileContext = createContext(null);
//
// function ProfileContextProvider({ children }) {
//     //user nodig uit authcontext
//     const { user } = useContext(AuthContext)
//
//     const [profileData, setProfileData] = useState({
//         userProfile: null,
//     })
//     const [changeProfileData, setChangeProfileData] = useState(false)
//
//     const data = {
//
//     }
//
//     return (
//         <ProfileContext.Provider value={data}>
//             {/*hier komt het component waar we onze eigen provider omheen wikkelen*/}
//             { children }
//         </ProfileContext.Provider>
//     )
// }
//
// export default ProfileContextProvider;