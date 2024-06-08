import React from 'react'



function Signature() {
  return (
    <div>
    <SignatureCanvas
    penColor="black"
    canvasProps={{width: "1500px", height: "1500px", className: "sigCanvas"}} />,
</div>
  )
}

export default Signature