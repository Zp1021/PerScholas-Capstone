// Importing navbar component
import NavBar from "../components/NavBar";

export default function AboutPage() {
    // Returns a page with a rendered navbar and a meme
    return (
        <>
            <h1>About</h1>
            <NavBar />
            <div className="meme">
                <img src="https://i.imgflip.com/a14dq0.jpg" title="made at imgflip.com"/>
            </div>
            <p className="greeting">In all actuality I hope you had fun touring this small site!</p>
        </>
    )
}