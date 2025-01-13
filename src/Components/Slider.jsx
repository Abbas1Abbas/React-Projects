import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import axios from 'axios'
import './Slider.css'

const Slider = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchData = async (api) => {
        setLoading(true);
        try{
            const res = await axios.get(api);
            setData(res.data);
        }catch(error){
            setError(`Error Occupied: ${error}`);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData('https://picsum.photos/v2/list?page=1&limit=5');
    },[]);

    const handleSlide = (index) => setCurrentIndex(index);

    if(error) return <div>{error}</div>
    if(loading) return <div>{loading}</div>

    return (
        <>
            <div className="sliderMainBox">
                <div className="slider">

                    <FaArrowLeft  
                    onClick={()=>handleSlide(((currentIndex - 1) % data.length))}
                    className='arrows arrowLft' />
                    {data.map((slide, index)=>{
                        return <div
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: '0.5s all ease'
                        }}
                        key={index}
                        className="slide">
                            <img className='slideImg' src={slide.download_url} alt={slide.id} />
                        </div>
                    })}
                    <FaArrowRight
                    onClick={()=>handleSlide(((currentIndex + 1) % data.length))}
                    className='arrows arrowRgt' />

                    <div className="indicatorDiv">
                        {data.map((slide, index)=>{
                            return <div
                            key={slide.id}
                            onClick={()=>handleSlide(index)}
                            className={`${currentIndex===index?"activeIndCir":"indicatorCircle"}`}
                            ></div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )

}

export default Slider