import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {

    const [show, setShow] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 100) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);

        //cleanup function
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img className='nav__logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

                <img className='nav__avatar' src="https://i0.wp.com/stormskillstraining.com/wp-content/uploads/2020/07/400-x-400-px-Avatar-Image-1.png?fit=400%2C400&ssl=1" alt="" />
            </div>
        </div>
    )
}

export default Nav;