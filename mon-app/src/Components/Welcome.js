import React from "react";
const Welcome = () => {

const bonjour = () => {
    const bonj = console.log('Bonjour');
    return bonj;
}

const bonsoir = (texte) => {
    const bonsoir = console.log(texte);
    return bonsoir;
}

return (
    <div>
        <button onClick={bonjour}>Fonction</button>
        <button onClick={() => bonsoir('Bonsoir')}>Argument</button>
        <button onClick={() => console.log('Bonne nuit')}>CLG</button>
    </div>
)


}

export default Welcome