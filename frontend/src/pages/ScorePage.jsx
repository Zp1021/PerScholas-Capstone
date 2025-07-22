import NavBar from "../components/NavBar";
import ScoreTable from "../components/ScoreTable";
import UpdateDelForm from "../components/UpdateDelForm";

export default function ScorePage() {
    return (
        <>
            <h1>Score Board</h1>
            <NavBar />
            <UpdateDelForm/>
            <ScoreTable />
        </>
    )
}