
function HomeOptions({quiz, game, handler, pic}){

    const HandleUserSelection = (e) => {
        handler(quiz)
        game(false)
    }
    return (
        <div className="h-12 w-3/5 rounded border-2 border-black mt-4 mb-2 flex items-center justify-center" onClick={() => {HandleUserSelection(quiz)}}>
            <img className="w-8 h-8 mr-2 rounded-full" alt="" src={pic}></img>
            <h1 className="text-lg sm:text-2xl">{quiz}</h1>
        </div>
    )
}


export default HomeOptions