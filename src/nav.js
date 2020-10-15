import React, {useEffect, useState} from 'react'

function Nav() {

    const [show, handleShow] = useState('');

    useEffect(() => {
        window.addEventListener("scroll", () => { 
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            
            <img className="nav__avatar" src="https://www.flaticon.com/svg/static/icons/svg/3176/3176167.svg" alt="Avatar" />
            
        </div>
    )
}

export default Nav
