import React from 'react';

import noSpot from '../../assets/no-spot.png'
import minorDiscoloration from '../../assets/minor-discoloration.png'
import multipleSpots from '../../assets/multiple-spots.png'
import largeSpot from '../../assets/large-spot.png'
import damagedTon from '../../assets/damaged-torn.png'
import heavyScratches from '../../assets/heavy-scratches.png'
import screenCracked from '../../assets/screen-cracked.png'
import multipleLines from '../../assets/multiple-lines.png'

const ScreenProblems = ({onQuestionSelected}) => {

    const problemsList = [
        {
            id: 0,
            img: noSpot,
            result: 'No spots on screen'
        },
        {
            id: 1,
            img: minorDiscoloration,
            result: 'Minor discoloration or small spots on screen'
        },
        {
            id: 2,
            img: multipleSpots,
            result: 'Multiple visible spots on screen'
        },
        {
            id: 3,
            img: largeSpot,
            result: 'Large heavy visible spots on screen'
        },
        {
            id: 4,
            img: damagedTon,
            result: 'Damaged / Torn screen on edges'
        },
        {
            id: 5,
            img: heavyScratches,
            result: 'Heavy scratches on screen'
        },
        {
            id: 6,
            img: screenCracked,
            result: 'Screen cracked / Glass Broken'
        },
        {
            id: 7,
            img: multipleLines,
            result: 'Multiple visible lines on screen'
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
                                                <input className="form-check-input" type="radio" name='size'
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

export default ScreenProblems;
