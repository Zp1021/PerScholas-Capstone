// Importing necessary react hooks
import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"

// URL to access enpoints in the backend
const URL = 'http://localhost:8080'


export default function ScoreForm() {

    // useState to render form on gamepage 
    const [players, setPlayers] = useState([])

    // useRef to track properties of what is written in the input fields
    const nameRef = useRef()
    const scoreRef = useRef()

    // navigate allows for sending users to a different page
    const navigate = useNavigate()

    // Retrieves data from the endpoint for later usage
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
    
        // console.log('players: ', players)

    // Async funtion that handles player data on form submission
    async function handleSubmit(e) {
        e.preventDefault()
        const player = {
            name: nameRef.current.value,
            score: scoreRef.current.value
        }

        // Post information to the database that will be rendered on the score page
        const response = await fetch(`${URL}/players`, {
            method: 'POST',
            body: JSON.stringify(player),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // Values of ref objects set to empty strings to start
        nameRef.current.value = ''
        scoreRef.current.value = ''

        // Sends users to score page once a submission is made
        navigate('/scores')
    }
       

    // Returns a form that when filled out and submitted 
    // directs users directly to score page to view data recently submitted
    return (
        <>
            <form className="score-form" onSubmit={handleSubmit}>
                <label >
                    Name:
                    <input className="name-text"
                        name="Name"
                        type="text"
                        ref={nameRef}
                    />
                </label>

                <label>
                    Score:
                    <input className="score-text"
                        name="Score"
                        type="number"
                        ref={scoreRef}
                    />
                </label>

                <button >submit</button>
            </form>
        </>
    )
}
