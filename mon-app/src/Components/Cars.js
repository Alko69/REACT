import React from "react";
import Wrapper from './Wrapper'

function Cars ({car,color}) {

    const colorInfo = color ? (<p>Couleur: {color} </p>) : (<p>Couleur manquante </p>)
    let brand = <p>{car}</p> 
    return (
    <Wrapper>
        {brand}
        {colorInfo}
    </Wrapper>
    );
}

export default Cars  


