import React from 'react';
import noTFound from "../../assets/404/404.gif"

const NotFound = () => {
    return (
        <div>
            <img src={noTFound} alt="" style={{width:"60%",margin:"0 auto",display:"block"}} />
        </div>
    );
};

export default NotFound;