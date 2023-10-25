/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const UserHome = () => {
        const {user} = useContext(AuthContext)

        return (
                <div> 
                        <h2 className="text-3xl mt-6 text-[#103060] font-medium">Hi, {user.displayName}</h2>  
                </div>
        );
};

export default UserHome;