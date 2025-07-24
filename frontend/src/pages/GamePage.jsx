// Importing navbar, phaser game, and score form components
import NavBar from "../components/site components/NavBar";
import GameConfig from "../components/game components/GameConfig";
import ScoreForm from "../components/site components/ScoreForm";


export default function GamePage() {

    // Returns a page that has a header, navbar, game, and form to fill out
    return (
        <div>
            <h1>Game Room</h1>
            <NavBar />
            <GameConfig />
            <ScoreForm />
        </div>
    )
}