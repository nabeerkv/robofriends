import React from "react";
import "tachyons";

const Card = ({id, name, email}) => {
    return (
      <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
        <img alt="robot" src={`https://robohash.org/${id}?size=200x200`}/>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    );
}

export default Card;