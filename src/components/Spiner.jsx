import React from 'react'
import HashLoader from "react-spinners/HashLoader";

function Spiner() {
  return (
    <div className='absolute bg-white/30 backdrop-blur-sm w-screen h-screen flex justify-center items-center'>
        <HashLoader color="#36d7b7" size={100} />
    </div>
  )
}

export default Spiner