import React from "react";

const Player = ({ name, className, classImage }) => {
  return (
    <div className="player">
      <h3>{name}</h3>
      {className && <img src={classImage} alt={className} />}
    </div>
  );
};

export default Player;
