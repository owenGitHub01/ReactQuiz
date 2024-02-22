
import htmlLogo from "../Images/html-icon.png"
import cssLogo from "../Images/css-icon.png"
import jsLogo from "../Images/js-icon.png"

import Footer from "../Footer/Footer"
import { cssQuestion, htmlQuestion, jsQuestion } from "../Data/Data"

function GameShow(chosen, setShowHome, questionNum, setQuestionNum, userScore, setUserScore, incorrectAnswers, setIncorrectAnswers) {

    // change below to = nothing
    let catagory
    let displayImg

    let currentQuestion

    // // remove below
    // chosen = 'HTML'

    const UpdateQuestion = () => {
        if(chosen.toLowerCase() === 'html'){
            catagory = htmlQuestion
            displayImg = htmlLogo
        }
        if(chosen.toLowerCase() === 'css'){
            catagory = cssQuestion
            displayImg = cssLogo
        }
        if(chosen.toLowerCase() === 'javascript'){
            catagory = jsQuestion
            displayImg = jsLogo
        }
        if(questionNum > 10){

        }
        else {
            console.log(`inside generating question... ${questionNum}`)
            currentQuestion = catagory[questionNum].question
            return (
                
                <div className="text-center pt-8 text-2xl pt-8">
                    <div className="flex items-center justify-center pb-8">
                        <img alt="" src={displayImg} className="w-16 h-16 rounded-full"></img>
                    </div>
                    <h1 className="text-center text-2xl">Question: {questionNum}</h1>
                    <h1>{currentQuestion}</h1>
                </div>
                )
            }}

    const HandleUserGuess = (userGuess) => {
        if(userGuess === catagory[questionNum].answer){
            setUserScore(userScore + 1)
        }
        else if(userGuess !== catagory[questionNum].answer)
        {
            incorrectAnswers.push({
                userGuessed: userGuess,
                correctAnswer: catagory[questionNum].answer,
                questionNumber: questionNum
            })
            console.log(`Incorrect!! ${incorrectAnswers.length}`)
        }
        setQuestionNum(questionNum + 1)
    }

    const DisplayOptions = () => {
        if(questionNum > 10){
            return Result()
        }
        let renderOptions = catagory[questionNum].options.map((opt) => {
            return (
                <div className="pt-4 flex items-center justify-center">
                    <button key={opt} onClick={() => HandleUserGuess(opt)} className="rounded border-2 border-black w-64 h-12 sm:w-72 sm:h-16">
                        {opt}
                    </button>
                </div>
            )
        })
        return renderOptions
    }

    const ExitGame = () => {
        setShowHome(true)
    }

    const Result = () => {
        console.log(incorrectAnswers.length)
        if(incorrectAnswers.length > 5){
            let renderIncorrect = incorrectAnswers.map((incorrect) => {
                return (
                    <div className="pt-2">
                        <h1 className="text-red-500">Question {incorrect.questionNumber}. Correct answer: {incorrect.correctAnswer}</h1>
                    </div>
                )
            })
            return (
                <div
                className="flex items-center justify-center pt-4">
                    <div className="border-2 border-black rounded w-4/5 text-center pb-2 sm:w-2/5 shadow-lg shadow-red-900">
                        <h1 className="text-2xl pt-6 pb-6 bold">End of the {chosen} Quiz!</h1>
                        <h1 className="text-2xl">Score</h1>
                        <h1 className="text-2xl">{userScore} Out of {catagory.length - 1}</h1>
                        <div className="pb-2">{renderIncorrect}</div>
                        <button onClick={ExitGame} className="sm:rounded sm:border-black sm:border-2 sm:w-36 rounded border-black border-2 w-2/5 bg-gradient-to-r from-cyan-500 to-cyan-300">Home</button>
                    </div>
                </div>
            )
        }
        else if(incorrectAnswers.length <= 5){
            let renderIncorrect = incorrectAnswers.map((incorrect) => {
                return (
                    <div className="pt-2">
                        <h1 className="text-red-500">Question {incorrect.questionNumber}. User guessed: {incorrect.userGuessed}. Correct answer: {incorrect.correctAnswer}</h1>
                    </div>
                )
            })
            return (
                <div
                className="flex items-center justify-center pt-8">
                    <div className="border-2 border-black rounded w-4/5 text-center pb-8 sm:w-2/5 shadow-lg shadow-red-900">
                        <h1 className="text-2xl pt-6 pb-6 bold">End of the {chosen} Quiz!</h1>
                        <h1 className="text-2xl">Score</h1>
                        <h1 className="text-2xl">{userScore} Out of {catagory.length - 1}</h1>
                        <div className="pb-2 sm:pb-6">{renderIncorrect}</div>
                        <button onClick={ExitGame} className="sm:rounded sm:border-black sm:border-2 sm:w-36 w-2/5 bg-gradient-to-r from-cyan-500 to-cyan-300">Home</button>
                    </div>
                </div>
            ) 
        }
        else {
            return (
                <div
                className="flex items-center justify-center pt-12">
                    <div className="border-2 border-black rounded w-4/5 text-center shadow-lg shadow-red-900">
                        <h1 className="text-2xl pt-6 pb-6 bold">End of the {chosen} Quiz!</h1>
                        <h1 className="text-2xl">Score</h1>
                        <h1 className="text-2xl">{userScore} Out of {catagory.length - 1}</h1>
                        <button onClick={ExitGame} className="sm:rounded sm:border-black sm:border-2 sm:w-36 w-2/5 bg-gradient-to-r from-cyan-500 to-cyan-300">Home</button>
                    </div>
                </div>
        )}
    }

        return (
            <div className="h-screen">
                <div className="h-5/6 bg-gradient-to-l from-indigo-200 via-red-200 to-yellow-100">
                    <div className="text-right pt-6 pr-6">
                        <button className="rounded border border-black h-8 w-16 bg-cyan-400" onClick={ExitGame}>Exit</button>
                    </div>
                    <div>
                        <h1>{UpdateQuestion()}</h1>
                    </div>
                    <div>{DisplayOptions()}</div>
                </div> 

                <div className="bg-gray-800 h-1/6">
                    <Footer />
                </div>
            </div>
            )
}


export default GameShow