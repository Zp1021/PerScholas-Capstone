// import { Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import GameConfig from "../../game components/GameConfig";

export default function GamePage() {

    return (
        <div>
            <h1>Game Room</h1>
            <NavBar/>
            <GameConfig/>
            {/* <ScoreForm/> */}
        </div>
    )
}