import Header from '@/components/Header/page';
import Navbar from '@/components/Navbar/page';
import React from 'react';

const Mainlayout = ({children}) => {
    return (
        <div>
            <Header />
            <Navbar />
            {children}
        </div>
    );
};

export default Mainlayout;