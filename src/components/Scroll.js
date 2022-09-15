import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', border: '5px solid rgb(76 170 117 / 20%)', height: 800}}>
            {props.children}
        </div>
    )
}

export default Scroll;