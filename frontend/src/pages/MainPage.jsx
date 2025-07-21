import { Form } from "react-router-dom";
// import Header from "../components/Header";
import NavBar from "../components/NavBar";
// import ScoreForm from "../components/ScoreForm";
import logo from "../assets/gather-round.gif"

export default function MainPage() {

    return (
        <div>
            {/* <Header /> */}
            <h1>Welcome to the Establishment</h1>
            <NavBar />
            <p className="greeting">
                Hello!
                <br />
                I'm so happy you chose to stop by.
                <br />
                While you're here why not check out the game room and relax for a bit.
            </p>
            <div className="gif-container">
                <img className="cats" src={logo} alt="cats gathered around a campfire" />
            </div>
        </div>
    )
}