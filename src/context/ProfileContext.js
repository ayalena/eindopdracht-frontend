import React, {createContext, useContext, useEffect, useState} from 'react';
import {AuthContext} from "./AuthContext";
import axios from "axios";

export const ProfileContext = createContext(null);

function ProfileContextProvider({ children }) {
    //user nodig uit authcontext
    const { user } = useContext(AuthContext)

    const [profileData, setProfileData] = useState({
        userProfile: null,
    })
    const [changeProfileData, setChangeProfileData] = useState(false)
    const [loading, toggleLoading] = useState(false);

    //mount
    useEffect(() => {
        toggleLoading(true)
        setChangeProfileData(false)
        //get token to prove authorisation
        const token = localStorage.getItem("token")
        if (token) {
            async function getUserData() {
                try {
                    //get user profile data from backend
                    const result = await axios(`http://localhost:8080/api/users/${user.id}/userprofile`, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setProfileData({
                        userProfile: {
                            firstName: result.data?.firstName,
                            lastName: result.data?.lastName,
                            age: result.data?.age,
                            gender: result.data?.gender,
                            address: result.data?.address,
                            postalCode: result.data?.postalCode,
                            country: result.data?.country,
                            phoneNumber: result.data?.phoneNumber,
                            message: result.data?.message,
                            sessionType: result.data?.sessionType,
                            isPregnant: result.data?.isPregnant,
                            hadAcu: result.data?.hadAcu,
                            reference: result.data?.reference,
                        }
                    })
                } catch (e) {
                    setProfileData({
                        userProfileData: null,
                    })
                }
                toggleLoading(false)
            }
            if(token) {
                getUserData()
            }
        }
    }, [user, changeProfileData])

    const data = {
        ...profileData,
        loading,
        setChangeProfileData,
    }

    return (
        <ProfileContext.Provider value={data}>
            { children }
        </ProfileContext.Provider>
    )
}

export default ProfileContextProvider;