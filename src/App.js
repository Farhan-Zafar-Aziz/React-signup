// import react from 'react'
import './App.css';
// import SignatureCanvas from 'react-signature-canvas'
// import Signup from './components/screens/signup'
// import Navbar from './components/navbar';
// import Signature from 'signature-canvas';
import QRCode from "react-qr-code";

function App() {
  return (

  <div className='flex justify-center items-center w-[100%] h-screen flex-wrap bg-zinc-700'>
  <div  className='flex justify-center items-center flex-col'> 
    <h1 className='text-5xl font-bold py-10 text-white'>React Q R Code</h1>
  <QRCode
    size={250}
    className='flex justify-center items-center h-[50%] w-[70%]'
    value={"Ho gaya bari mushkilu se"}
    viewBox={`0 0 256 256`}
  />
</div>
    {/* <SignatureCanvas
    penColor="black"
    canvasProps={{width: "1500px", height: "1500px", className: "sigCanvas"}} />, */}
      {/* <Navbar /> */}
      {/* <Signature /> */}

    </div>
  );
}

export default App;
