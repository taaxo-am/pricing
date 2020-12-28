import React, {useState} from 'react';
import QuestionsList from "./QuestionsList";
import QuestionsResult from "./QuestionsResult";
import PhysicalProblems from "./PhysicalProplems";
import ScreenProblems from "./ScreenProblems";
import {NavLink} from "react-router-dom";

const Questions = () => {

    const [steps, updateSteps] = useState(1)
    const [resultList, setResultList] = useState([])

    const onQuestionSelected = (answer) => {
        console.log(answer)
        let list = [...resultList, answer]
        setResultList(list)
    }

    return (

        <div className='container'>
            <div className='row gx-4'>
                <div className="col-12 col-md-7">
                    {
                        steps === 1 && (<QuestionsList onQuestionSelected={onQuestionSelected}/>)
                    }
                    {
                        steps === 2 && (<PhysicalProblems onQuestionSelected={onQuestionSelected}/>)
                    }
                    {
                        steps === 3 && <ScreenProblems onQuestionSelected={onQuestionSelected}/>
                    }
                </div>

                <div className="col-12 col-md-5 mt-3 mt-md-0">
                    <div className="d-flex flex-column">
                        <div className=''>
                            <QuestionsResult values={resultList}/>
                        </div>
                        <div className='d-flex mx-auto'>
                            <button className='w-auto mt-4 px-5 btn btn-outline-primary btn-lg'
                                    disabled={steps === 1}
                                    onClick={() => steps > 1 && updateSteps(step => step - 1)}>Back
                            </button>
                            <button className='w-auto ms-5 mt-4 btn btn-primary btn-lg'
                                    onClick={() => steps < 3 && updateSteps(step => step + 1)}>
                                {
                                    steps < 3
                                        ? (
                                            <span className='px-5'>Next</span>
                                        ) : (
                                            <NavLink className='px-4 text-decoration-none text-white' to='/result'>
                                                Continue
                                            </NavLink>
                                        )
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
