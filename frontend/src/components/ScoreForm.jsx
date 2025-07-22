// import { set } from "mongoose"
// import { response } from "express"

import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"


const URL = 'http://localhost:8080'


export default function ScoreForm() {

    const [players, setPlayers] = useState([])
    const nameRef = useRef()
    const scoreRef = useRef()

    const navigate = useNavigate()

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

    async function handleSubmit(e) {
        e.preventDefault()
        const player = {
            name: nameRef.current.value,
            score: scoreRef.current.value
        }

        const response = await fetch(`${URL}/players`, {
            method: 'POST',
            body: JSON.stringify(player),
            headers: {
                'Content-Type': 'application/json'
            }
        })


        nameRef.current.value = ''
        scoreRef.current.value = ''

        navigate('/scores')
    }
       

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
