import React from 'react'
import { mcqQuestions } from '@/constants/questions'

const QuestionList = () => {
    return (
        <div>
            {mcqQuestions.map((q) => (
                <div key={q.id}>
                    <p>{q.question}</p>

                </div>
            ))}
        </div>
    )
}

export default QuestionList
