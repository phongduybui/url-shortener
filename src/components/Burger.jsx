import React, { useState } from 'react'
import Navbar from './Navbar';

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div 
                className={`burger ${open ? 'burger--open' : ''}`}
                onClick={() => setOpen(!open)} 
            >
                <div className="burger__bar" />
                <div className="burger__bar" />
                <div className="burger__bar" />
            </div>
            <Navbar collapse={open} />
        </>
    )
}

export default Burger
