import React, { useState } from 'react'
import './QrCode.css'
import QRCode from 'react-qr-code'

const QrCode = () => {

    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    const generateQrCode=()=>{
        if(input.trim()) setQrCode(input.trim());
    }


    return (
        <div className='qrCodeContainer'>
            <div className='qrCodeDetail'>
                <input
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder='Type Your Value...'
                    type="text"
                    name='qr-code'
                    value={input}
                />
                <button
                onClick={generateQrCode}
                >Generate</button>
            </div>
            <div>
                <QRCode id='qr-code-value' value={qrCode} size={400} bgColor="white" />
            </div>
        </div>
    )
}

export default QrCode