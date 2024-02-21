import HomeOptions from "./HomeOptions"
import Footer from "../Footer/Footer"

import htmlLogo from "../Images/html-icon.png"
import cssLogo from "../Images/css-icon.png"
import jsLogo from "../Images/js-icon.png"

function HomeShow(game, UserClick){

    return (
        <div className="h-screen ">
            <div className="text-center pt-24 sm:flex sm:pt-24 h-5/6 bg-gradient-to-r from-slate-100 to-slate-300">
                <div className="sm:w-1/2">
                    <div className="text-center text-2xl pt-16">
                        <h1 className="flex items-center justify-center sm:text-3xl">Welcome to the <h1 className="underline pl-2"> Frontend Quiz</h1></h1>
                        <h1 className="text-xl pt-8 sm:pt-4 sm:text-2xl">Pick and option to get started!</h1>
                    </div>
                </div>
                <div className="sm:w-1/2 sm:pt-16">
                    <div className="flex items-center justify-center">
                        <HomeOptions quiz="HTML" game={game} handler={UserClick} pic={htmlLogo}/>
                    </div>
                    <div className="flex items-center justify-center">
                        <HomeOptions quiz="CSS" game={game} handler={UserClick} pic={cssLogo}/>
                    </div>
                    <div className="flex items-center justify-center">
                        <HomeOptions quiz="JavaScript" game={game} handler={UserClick} pic={jsLogo}/>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 h-1/6">
                <Footer />
            </div>
        </div>
        
        )
}

export default HomeShow