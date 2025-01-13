import React from 'react'
import './ScrollToTop.css'

const ScrollToTop = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className='scrollToTop'>
            <button onClick={scrollToTop}>Scroll To Top
                <img src="https://i.ibb.co/MRxyRYD/back-to-top.png" alt="Error" />
            </button>
        </div>
    )
}

export default ScrollToTop