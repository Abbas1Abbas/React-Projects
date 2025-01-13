import React, { useState } from 'react'
import TabData from './TabData.jsx'
import './Tab.css'

const Tab = () => {

    const [current, setCurrent] = useState(0);

    return (
        <div className='tabMain'>
            <div className='tabHeader'>
                {TabData.map((data, index)=>(
                    <div key={index}>
                        <div className={`${current===index?"activeTab":"tab"}`} onClick={()=>setCurrent(index)} key={index}>{data.header}</div>
                    </div>
                ))}
            </div>
            <div className="tabContainer">
                {TabData.map((data, index)=>(
                    current === index ? (<div key={index}>{data.content}</div>) : ""
                ))}
            </div>
        </div>
    )
}

export default Tab