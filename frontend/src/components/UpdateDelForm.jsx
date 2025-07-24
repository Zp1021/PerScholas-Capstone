// import { useEffect, useState, useRef } from "react"

// const URL = 'http://localhost:8080'

// export default function UpdateDelForm() {

//     const [players, setPlayers] = useState([])
//     const nameRef = useRef()
//     const scoreRef = useRef()

//     async function getData() {
//         try {
//             const response = await fetch(`${URL}/players`)
//             const data = await response.json()
//             setPlayers(data)
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     useEffect(() => {
//         getData()
//     }, [])

//     console.log('players: ', players)

//     async function handleSubmit(e) {
//         e.preventDefault()
//         const player = {
//             name: nameRef.current.value,
//             score: scoreRef.current.value
//         }

//         nameRef.current.value = ''
//         scoreRef.current.value = ''
//     }
//         async function handleUpdate(id) {
//             await fetch(`${URL}/players/${id}`, {
//                 method: 'PATCH'
//             })
//             getData()
//         }

//         async function handleDelete(id) {
//             await fetch(`${URL}/players/${id}`, {
//                 method: 'DELETE'
//             })
//             getData()
//         }



//     return (
//         <>
//             <form className="score-form" onSubmit={handleSubmit} >
//                 <label >
//                     Name:
//                     <input className="name-text"
//                         name="Name"
//                         type="text"
//                         ref={nameRef}
//                     // onChange={handleChange}
//                     // value={form.name}
//                     />
//                 </label>

//                 <label>
//                     Score:
//                     <input className="score-text"
//                         name="Score"
//                         type="number"
//                         ref={scoreRef}
//                     // onChange={handleChange}
//                     // value={form.score}
//                     />
//                 </label>

//                 <button onClick={() => handleUpdate(player._id)}>Update</button>
//                 <button onClick={() => handleDelete(player._id)}>Delete</button>
//             </form>
//         </>
//     )
// }