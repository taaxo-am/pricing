import React from "react";
import iPhone from "../../../../assets/img/iphone-11-pro.png";

const QuestionsResult = ({values}) => {

    const sizes = ['64 GB', '128 GB', '512 GB']

    return (
        <div className="card">
            <div className="row gx-1 p-3">
                <div className='col-4'>
                    <img className='img-fluid' src={iPhone} alt=""/>
                </div>

                <div className='col-8 d-flex flex-column justify-content-evenly'>
                    <h3 className='m-0 text-highlight me-auto'>Apple iPhone 12</h3>
                    <div className='d-flex justify-content-between'>
                        {
                            sizes.map(size => {
                                return (
                                    <div key={size} className='card p-2'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name='size'/>
                                            <label className="form-check-label">
                                                {size}
                                            </label>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <hr/>

            <div className='container px-5 py-3'>
                <h5>Device Details</h5>
                <ul className='px-3 py-3'>
                    {
                        values && values.map((item, index) => {
                            return (
                                <li key={item.id} className='mb-3'>
                                    {item.answers[index].result}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default QuestionsResult
