// Importing navbar component
import NavBar from "../components/NavBar";

export default function MemePage() {
    // Returns a page with a rendered navbar and a meme
    return (
        <>
            <h1>Meme</h1>
            <NavBar />
            <div className="meme">
                <img src="https://i.imgflip.com/a14dq0.jpg" title="made at imgflip.com"/>
            </div>
            <p className="greeting">
                In all sincerity I hope you had fun touring this small site!
                <br/>
                Thank you for your time    
            </p>
        </>
    )
}