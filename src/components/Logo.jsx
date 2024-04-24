import React from "react";
import background from "../../src/assets/img/output.png";

const logo = () => {
    return (
        <div className='logo' style={{backgroundImage:`url(${background})` }}>
            <img src="../../public/react.png" alt="logo react" />
            <h3>React World</h3>
        </div>
    )
}

export default logo ;
