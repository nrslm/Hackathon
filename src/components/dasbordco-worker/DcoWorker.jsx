import React from 'react'
import './main.css'

function timer(){ 
    let Timer ; 
    // hz
}

function finished(){
    const date = new Date()
}

function DcoWorker() {
    return (
        <div className='DcoWorker'>
            <div className="container">
                <div className="cuCoWorking">
                    <div className="custemer">Custemer</div>
                    <div className="point">Point</div>
                    <div className="what">What?</div>
                    <div className="time">Time</div>
                    <div className="working">Co-Wirking</div>
                </div>
                <div className="container-custemer">
                    <div className="custemerRoyal">
                        <div className="custemer">Custemer</div>
                        <div className="point">Point</div>
                        <div className="what">What?</div>
                        <div className="time">Time</div>
                        <div className="working">Co-Wirking</div>
                    </div>
                </div>
                
                <div className="timer">
                    <div className="buttonNextCustemer">
                        <button onClick={() => timer}>
                            Next
                        </button>
                    </div>
                    <div className="buttonOutWirking">
                        <button onClick={()=> finished}>
                           Finished 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DcoWorker