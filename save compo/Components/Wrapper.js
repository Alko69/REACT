import React from "react";

function Wrapper ({children})
{
    return (
        <div style={{backgroundColor: 'pink'}}>{children}</div>
    );
}

export default Wrapper