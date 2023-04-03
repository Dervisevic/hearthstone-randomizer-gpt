import React, { useState, useEffect } from "react";
import "./App.css";
import Player from "./Player.jsx";

const SOCKET_SERVER_URL = "ws://localhost:3001";

export default function App() {
  const [socket, setSocket] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const newSocket = new WebSocket(SOCKET_SERVER_URL);
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.onmessage = (event) => {
      const newPlayers = JSON.parse(event.data);
      setPlayers(newPlayers);
    };
  }, [socket]);

  const randomize = () => {
    if (!socket) return;
    socket.send(JSON.stringify({ type: "randomize" }));
  };

  return (
    <div className="App">
      <button onClick={randomize}>Randomize</button>
      <div className="players">
        {players.map((player, index) => (
          <Player
            key={index}
            name={player.name}
            className={player.className}
            classImage={player.classImage}
          />
        ))}
      </div>
    </div>
  );
}



