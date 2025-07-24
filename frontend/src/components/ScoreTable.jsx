// Importing react hooks
import { useEffect, useState } from "react"

// URL to access backend servers
const URL = 'http://localhost:8080'

export default function Table() {

    // useState to render data later on in the react page
    const [players, setPlayers] = useState([])

    // Function retrieves data from get end point
    async function getData() {
        try {
            const response = await fetch(`${URL}/players`)
            const data = await response.json()
            setPlayers(data)
        } catch (e) {
            console.log(e)
        }
    }

    // Allows for the data fetching function to occur and render only once
    useEffect(() => {
        getData()
    }, [])

    // Console representation of data
    // console.log('players: ', players)

    // Returns a table that is created with the respective entry ID's 
    // containing the names and scores that were entered
    return (
        <div className="table-div">
            <table>
                <thead>
                    <tr>
                        <th>Players</th>
                        <th>Scores</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) =>
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>{player.score}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}