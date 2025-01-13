import React, { useState } from 'react'
import { data } from './Data.jsx';
import './Accordion.css'

const Accordion = () => {

    const [multipleId, setMultipleId] = useState([]);
    const [multiple, setMultiple] = useState(false);
    const [current, setCurrent] = useState(null);

    const handleSingleClick = (id) => {
        setCurrent((prev) => prev === id ? null : id);
    }

    const handleMultipleClick = (id) => {
        const indexOfId = multipleId.indexOf(id);
        if(indexOfId === -1) setMultipleId([...multipleId, id]);
        else setMultipleId(multipleId.filter((multiId) => multiId !== id));
    }

    return (
        <div className='wrapper'>
            <div className='wrapperHdg'>
                <div>Accordion</div>
                <div><button onClick={()=> setMultiple((prev) => !prev)}>{multiple?"Disable Multiple":"Enable Multiple"}</button></div>
            </div>

                {data && data.length>0 ? (
                    <>
                        {multiple?(
                            <div className='multipleGrid'>
                                {data.map((faq)=>(
                                    <div className='cardMultiple' key={faq.id} onClick={()=>{handleMultipleClick(faq.id)}}>
                                        <div>
                                            <div>{faq.title}</div>
                                            <div>{multipleId.includes(faq.id)?"-":"+"}</div>
                                        </div>
                                        <div>{multipleId.includes(faq.id)?faq.answer:""}</div>
                                    </div>
                                ))}
                            </div>
                        ):(
                            <div className='gridSingle'>
                                {data.map((faq)=>(
                                    <div className='gridRow' onClick={()=>handleSingleClick(faq.id)} key={faq.id}>
                                        <div>
                                            <div>{faq.title}</div>
                                            <div>{current===faq.id?"-":"+"}</div>
                                        </div>
                                        <div>{current===faq.id?faq.answer:""}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                ):(
                    <div>Data Not Found</div>
                )}
        </div>
    )
}

export default Accordion