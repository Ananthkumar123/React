import React from "react";
import { useState } from "react";

function Bgchanger() {
    let [color, setColor] = useState('olive')

    return (
        <>
            <div style={{ backgroundColor: color, width:100 }}>
                <div>
                    <button className="btn btn-primary" onClick={() => setColor('blue')}> blue </button>
                    <button className="btn btn-danger" onClick={() => setColor('red')} > red </button>
                    <button className="btn btn-success" onClick={() => setColor('green')}> green </button>
                    <button className="btn btn-warning"  onClick={() => setColor('yellow')}> yellow  </button>
                </div>
            </div>
        </>)
}
export default Bgchanger 