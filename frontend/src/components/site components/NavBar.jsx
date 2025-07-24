import '../../App.css'
import { Link } from 'react-router-dom'

// Export function that returns the navbar of the main page
export default function NavBar() {
    return (
        // This will be a universal navbar that will hold all the 
        // traversal options for the pages: Home, Game, Scores, and About
        <nav className="nav">
            <Link to="/" className="home">Home</Link>
            <ul>
                <li><Link to="/game">Game</Link></li>
                <li><Link to="/scores">Scores</Link></li>
                <li><Link to="/About">Meme</Link></li>
            </ul>
        </nav>
    )
}