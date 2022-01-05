import React, { createContext } from 'react';

export const ProfileContext = createContext(null);

function ProfileContextProvider({ children }) {
    // hier komt straks de state waarin we de context-data plaatsen

    return (
        <ProfileContext.Provider value={}>
            // hier komt het component waar we onze eigen provider omheen wikkelen
            { children }
        </ProfileContext.Provider>
    )
}

export default ProfileContextProvider;