import '../App.css'
import { Link } from 'react-router-dom'

// Export function that returns the navbar of the main page
export default function NavBar() {
    return (
        // This will be a universal navbar that will hold all the options of the pages: Home, Game, Scoreboard, About
        <nav className="nav">
            <Link to="/" className="site-title">Home</Link>
            <ul>
                <li><Link to="/game">Game</Link></li>
                <li><Link to="/scores">Scores</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </nav>
    )
}