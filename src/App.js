import HomeShow from "./HomePage/HomeShow"

import GameShow from "./GamePage/GameShow"

import { useState } from "react"

function App(){
    const [showHome, setShowHome] = useState(true)
    const [quiz, setQuiz] = useState("")
    const [questionNum, setQuestionNum] = useState(1)
    const [userScore, setUserScore] = useState(0)
    const [incorrectAnswers, setIncorrectAnswers] = useState([])

    
    const handleUserChoice = (quizSelector) => {
        setQuiz(quizSelector)
        setQuestionNum(1)
        setUserScore(0)
        setIncorrectAnswers([])
        return quizSelector
    }
    if(showHome){
        return HomeShow(setShowHome, handleUserChoice, setQuestionNum)
    }
    else {
        return GameShow(quiz, setShowHome, questionNum, setQuestionNum, userScore, setUserScore, incorrectAnswers, setIncorrectAnswers)
    }
}

export default App