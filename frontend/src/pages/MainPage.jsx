import { Form } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
// import ScoreForm from "../components/ScoreForm";

export default function MainPage() {

    return (
        <div>
            <Header />
            <NavBar />
            Hello World
            {/* <ScoreForm/> */}
        </div>
    )
}