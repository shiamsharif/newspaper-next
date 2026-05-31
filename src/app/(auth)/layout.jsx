import Navbar from '@/components/Navbar/page';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default AuthLayout;