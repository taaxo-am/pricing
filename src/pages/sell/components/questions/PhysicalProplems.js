import React from 'react';

import frontCam from '../../assets/front-cam.png'
import backCam from '../../assets/back-cam.png'
import volumeTouch from '../../assets/volume-btn.png'
import fingerTouch from '../../assets/finger-touch.png'
import wifi from '../../assets/wifi.png'
import battery from '../../assets/battery.png'
import speaker from '../../assets/speaker.png'
import power from '../../assets/power.png'

const PhysicalProblems = ({onQuestionSelected}) => {

    const problemsList = [
        {
            id: 0,
            img: frontCam,
            result: 'Front-camera not working'
        },
        {
            id: 1,
            img: backCam,
            result: 'Back-camera not working'
        },
        {
            id: 2,
            img: volumeTouch,
            result: 'Volume btn not working'
        },
        {
            id: 3,
            img: fingerTouch,
            result: 'Finger-touch not working'
        },
        {
            id: 4,
            img: power,
            result: 'Power btn not working'
        },
        {
            id: 5,
            img: battery,
            result: 'Battery not working'
        },
        {
            id: 6,
            img: speaker,
            result: 'Speaker not working'
        },
        {
            id: 7,
            img: wifi,
            result: 'WiFi network not working'
        }
    ]

    return (
        <div className="card">
            <h4 className="card-header p-3 bg-white text-center">TELL US MORE ABOUT YOUR PHONE</h4>
            <div className="card-body p-4 mx-4">
                <ul className='row row-cols-3 g-4 p-0 list-style-none'>
                    {
                        problemsList.map(problem => {
                            return (
                                <li key={problem.id} className='col'>
                                    <div className='card'>
                                        <img className='card-img-top my-3'
                                             style={{height: "92px", objectFit: 'cover'}} src={problem.img} alt=""/>
                                        <div className='card-footer'>
                                            <div className="form-check mx-auto">
                                                <input className="form-check-input" type="checkbox" name='size'
                                                onChange={() => onQuestionSelected(problem)}/>
                                                <label className="form-check-label">
                                                    {problem.result}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default PhysicalProblems;
