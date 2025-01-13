import React, { useEffect, useState } from 'react'
import './LightDark.css'

const lightDark = () => {
    const [theme, setTheme] = useState('light');

    const handleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
    }

    useEffect(()=>{
        const localTheme = JSON.parse(localStorage.getItem('theme'));
        if(localTheme) setTheme(localTheme);
    },[])

    return (
        <div className='themeContainer' data-theme={theme} >
            <div>Hello World!</div>
            <button onClick={handleTheme}>{theme==="light"?"Dark Mode":"Light Mode"}</button>
        </div>
    )
}

export default lightDark