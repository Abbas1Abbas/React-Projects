import React from 'react'
import './ScrollIndicator.css'
import { useState } from 'react'
import { useEffect } from 'react'

const ScrollIndicator = () => {

    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScrollPercentage = () => {
        
        const howMuchScroll = document.body.scrollTop ||document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage(Math.floor((howMuchScroll/height) * 100))
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScrollPercentage)

        return () => {
            window.removeEventListener('scroll', ()=>{})
        }
    },[]);

    return (
        <div className='scrollIndicMain'>
            <h1>Scroll Indicator</h1>
            <div 
            style={{width: `${scrollPercentage}%`,}}
            className="bottomScroll"></div>
        </div>
    )
}

export default ScrollIndicator