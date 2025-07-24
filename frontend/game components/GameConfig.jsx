// Importing starting game code and phaser tools
import Start from "./Start";
import Phaser from "phaser";
import { useEffect } from "react";


// Game configurations allowing for the game to be in a div and exist within the browser
export default function GameConfig() {
    const config = {
        type: Phaser.AUTO,
        title: 'Overlord Rising',
        description: '',
        parent: 'game-container',
        width: 800,
        height: 600,
        backgroundColor: '#000000',
        pixelArt: false,
        scene: [
            Start
        ],
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        physics: {
            default: 'arcade',
            arcade: {
                debug: false,
                gravity: { y: 500 }
            }
        },
    }

    // Allows for phaser game to properly render with in react
    useEffect(() => {
        const game = new Phaser.Game(config);

        return () => {
            game.destroy(true);
        }
    }, [])
    return (
        <div id="phaser-container" />
    )
}