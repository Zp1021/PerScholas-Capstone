// Importing components
import NavBar from "../components/NavBar";
import ScoreTable from "../components/ScoreTable";

export default function ScorePage() {
    // returns a page that has rendered the navbar and a table of scores
    return (
        <>
            <h1>Score Board</h1>
            <NavBar />
            <ScoreTable />
        </>
    )
}