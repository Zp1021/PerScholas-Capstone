# PerScholas Capstone

GOAL:
The goal of this project was to create a basic web app that holds a game made with phaser.

TECH:
The technologies used in the making of this project are as follows: MongoDB for the database, ExpressJS and NodeJS for the server, React for the frontend, and Phaser to make the game, the coding language used heavily in the project was JavaScript.

OVERVIEW:
The site has a basic landing page with a header and a navbar component that can be used to manually traverse throughout the pages. There are 3 other pages that display content, first of which is the game page where a game (made using the phaser framework) is displayed. 

NOTE: the game is not of original design it is the basic game that the phaser tutorial walks users through to make in order to understand how phaser works. The steps are within the series of post made via this link: https://phaser.io/tutorials/making-your-first-phaser-3-game/part1

The game is being rendered on a react frontend as its own component on the page accompanied by the navbar component that rests at the top and a form component that is set to the side. The form is used to manually submit a name and score from playing the game.

The data submitted through the form will be pushed into a mongoDB database and will be rendered on a differennt page that shows the scores. 

NOTE: Each entry must be unique otherwise an error is thrown, however the app will not crash when the error occurs, at the time of writing the logic to handle this unwanted behavior has yet to be developed. 

When the form is submitted users will automatically be redirected to the scores page where a list of data from the database will be displayed along with other data entries. In the form of name and scores within a table.

An about page exists with only an image to be rendered it also includes the navbar component so that users could traverse across the site.