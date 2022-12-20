import { Component } from 'react'
import Car from './Cars'
import Welcome from './Welcome'

class Mycars extends Component {

    state = {
        voitures: [
            {name:"Ford", color:"red", year:"2000"},
            {name:"Mercedes", color:"black", year:"2010"},
            {name:"Fiat", color:"blue", year:"1995"}
        ]
    }
    
    old = () => {
        const updatedState = this.state.voitures.map((x) => {
            return x.year -=10;
        });
        this.setState ({
            updatedState
        })
    }


    render() {
        const [ford,mercedes,fiat] = this.state.voitures;
        return (
            <>
                <h1>{this.props.title}</h1>
                <button onClick={this.old}>Vieillir</button>
                <Car name={ford.name} color={ford.color} year={ford.year}/>
                <Car name={mercedes.name} color={mercedes.color} year={mercedes.year}/>
                <Car name={fiat.name} color={fiat.color} year={fiat.year}/>                        
                <Welcome></Welcome>
            </>
        )
    }
}

export default Mycars