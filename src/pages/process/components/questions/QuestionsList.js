import questions from "../../questions";
import charger from "../../assets/charger.png";
import box from "../../assets/box.png";
import earphones from "../../assets/earphones.png";
import React from "react";

const QuestionsList = ({onQuestionSelected}) => {
    return (
        <div className="card">
            <h4 className="card-header p-3 bg-white text-center">TELL US MORE ABOUT YOUR PHONE</h4>
            <div className="card-body p-4 mx-4">
                <ul>
                    {
                        questions.map(q => {
                            return (
                                <QuestionsListItem question={q} onQuestionSelected={onQuestionSelected}/>
                            )
                        })
                    }
                </ul>

                <div className='mt-5 p-4 d-flex flex-column'>
                    <h4 className='text-highlight mx-auto'>DO YOU HAVE THE FOLLOWING?</h4>
                    <div className="d-flex justify-content-between mt-4">
                        <div className='d-flex flex-column'>
                            <img className='img-fluid' src={charger} alt=""/>
                            <div className="form-check mx-auto">
                                <input className="form-check-input" type="checkbox" name='size'/>
                                <label className="form-check-label">
                                    Original Charger
                                </label>
                            </div>
                        </div>

                        <div className='d-flex flex-column mx-4'>
                            <img className='img-fluid' src={box} alt=""/>
                            <div className="form-check mx-auto">
                                <input className="form-check-input" type="checkbox" name='size'/>
                                <label className="form-check-label">
                                    Original Box
                                </label>
                            </div>
                        </div>

                        <div className='d-flex flex-column'>
                            <img className='img-fluid' src={earphones} alt=""/>
                            <div className="form-check mx-auto">
                                <input className="form-check-input" type="checkbox" name='size'/>
                                <label className="form-check-label">
                                    Original Earphones
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const QuestionsListItem = ({question, onQuestionSelected}) => {
    return (
        <li key={question.id}>
            <p className='mt-4 mb-0'>{question.question}</p>
            <small className='text-muted'>{question.detail}</small>
            <div className='row row-cols-2 g-4 mt-1'>
                {
                    question.answers.map(a => {
                        return (
                            <div className='col'>
                                <div key={question.id} className='card px-3 py-2'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio"
                                               name={question.id}
                                               id={question.id}
                                               onChange={() => onQuestionSelected(question, a)}/>
                                        <label className="form-check-label">
                                            {a.answer}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </li>
    )
}

export default QuestionsList
