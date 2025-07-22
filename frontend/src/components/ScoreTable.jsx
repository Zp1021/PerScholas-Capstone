import { useEffect, useState } from "react"

const URL = 'http://localhost:8080'

export default function Table() {


    const [players, setPlayers] = useState([])

    async function getData() {
        try {
            const response = await fetch(`${URL}/players`)
            const data = await response.json()
            setPlayers(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    console.log('players: ', players)

    return (
        <>
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
        </>
    )
}