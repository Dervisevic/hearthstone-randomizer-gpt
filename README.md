# Hearthstone Class Randomizer (built by ChatGPT)
This was a test to build a brand new project with ChatGPT 4. I'll include the initial prompt below. Chatgpt did about 90% of the work, and only struggled with some import issue and JSX naming. It did not get the classes or images so i included these, along with some additional styling. Takeaways here is it's useful for these small projects from scratch where it knows the full context and can help find issues and expand on questions you may have. From start to finish this project was about 20 minutes.


> This is the context. You are a full-stack Javascript developer and you know Node.JS. I am also one, so we are going to do some pair programming and set up a project from scratch. You will guide me through the process of setting up this project on a windows 11 machine. Assume that i have nothing installed on the PC except for an IDE/Editor. So you will tell me where to get what software, and what commands to run and what files to write. And i will test your work and check the code for consistency.  Ok this is the project we're doing:

> The project is a website for randomzing hearthstone classes before a competitive match. Both players need to be able to enter their names on the site, and there should be a randomize button that will randomize between all hearthstone classes. hearthstone is a blizzard card game. You need to look up what they are and if you can find images of each class. When you press the randomize button you need to randomize and choose 1 class for each player, and then display the class image above each of the names of the players.

> There needs to be a node backend that will keep track of this, the communication should be websockets based so that each randomization is handled in the node backend and then streamed out to all clients connected to it with the frontend described above. There is no need to save these randomizations they are a one and done.

> The frontend should be a React app that on load connects to the node backend with websockets. All users should connect to the same backend instance and when one user presses the randomize button it will randomize for all users connected on the website.

> Before we get started, do you have any clarifying questions?

Below is the Readme generated by GPT after the project finish:

# Hearthstone Class Randomizer

This project is a simple web application that allows two players to randomize their Hearthstone classes before a competitive match. The frontend is built using React, and the backend uses Node.js with WebSockets for real-time communication.

## Overview

We started by setting up the project structure, with a Node.js server and a separate React app in the `client` folder. Then, we installed the necessary dependencies and configured the Node.js server to listen for WebSocket connections.

The server keeps track of player data, including names and randomized Hearthstone classes, and broadcasts updates to all connected clients. When a user clicks the "Randomize" button on the frontend, a WebSocket message is sent to the backend to randomize the classes. The server then sends the updated player information to all clients.

In the React app, we created the `Player` component to display each player's name and class image. We also used hooks to manage state and handle WebSocket messages in the `App` component. Finally, we added some basic CSS to style the app and display the player images side by side.

## Key Steps

1. Set up the project structure with a Node.js server and a React app in the `client` folder.
2. Install dependencies and configure the Node.js server to use WebSockets.
3. Implement the server logic to randomize Hearthstone classes and broadcast updates to connected clients.
4. Create the `Player` component and manage WebSocket messages in the `App` component of the React app.
5. Style the app with CSS to display the player images side by side.

## Running the Project

To run the project, first start the Node.js server by running `npm start` in the project root directory. Then, in a separate terminal, navigate to the `client` directory and start the React development server by running `npm start`. The React app should open in your default web browser at `http://localhost:3000`.

## Future Improvements

This project can be further improved by adding features such as user authentication, a lobby system, or a history of past randomizations.
