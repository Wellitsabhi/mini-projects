import QRCode from "react-qr-code";
import { useState } from "react";

function QRCodeGenerator() {
    const [qrcode, setqrcode] = useState('')
    const [input, setinput] = useState('')

function handleGenerateQrCode(){
    setqrcode(input);
    setinput('');
}

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input   onChange={(e)=>setinput(e.target.value)} type="text" value={input} name="qr-code" placeholder="Enter  here" />
       
        <button  disabled = {input && input.trim() !== "" ? false :true} onClick={handleGenerateQrCode}    >Generate</button>
      </div>
      <div>
        <QRCode 
            id = "qr-code-value"
            value={qrcode}
            size={400}
            bgcolor= '#fff'
        />
      </div>
    </div>
  );
}

export default QRCodeGenerator;
