import React from "react";

import onlineIcon from "../../icons/circle-fill.svg";
import chatman from "../../icons/chatman.png";
import chatting from "../../icons/chatting.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
      <img
        src={chatting}
        alt="chatting"
        style={{ width: "170px", height: "130px" }}
      />
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
          <img src={chatman} alt="chatman" />
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
