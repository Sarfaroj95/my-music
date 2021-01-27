import React from 'react'
import img1 from "../../assets/one.jpeg";
import img2 from "../../assets/two.jpeg";
import img3 from "../../assets/three.jpeg";


function Pictures() {
    return (
        <div>
            <div className="imgDiv">
                <img src={img1} className="img" />
                <img src={img2} className="img" />
                <img src={img3} className="img" />

            </div>
        </div>
    )
}

export default Pictures
