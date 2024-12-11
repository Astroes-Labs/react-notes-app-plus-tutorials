import React from "react";
import Avatar from "./Avatar_21";
import Detail from "./Detail_21";

function Card(props) {
  return (
    <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL={props.imgURL}/>
        </div>
        <div className="bottom">
        <Detail detail={props.phone} />
        <Detail detail={props.email} />
        </div>
    </div>
  );
}

export default Card;
