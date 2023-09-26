/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const UserHome = () => {
        const {user} = useContext(AuthContext)

        return (
                <div>
                        <h1>user home</h1> 
                        <h2>Hello user : { user.displayName}</h2>  
                </div>
        );
};

export default UserHome;