import {Component} from "react";
import Car from "./Car";

class Form extends Component {

    state = {
        username: '',
        color: '',
        colors : ['none', 'black', 'pink', 'red', 'blue', 'lightblue']
    }

    setName = (e) => {
        e = e.target.value;
        this.setState ({
            username : e
        })
    }

    setColor = (e) => {
        e = e.target.value;
        this.setState ({
            color : e
        })
    }

    render() {
        return (
            <div>
                <Car color= {this.state.color} height="100" />
                <h1> Salut {this.state.username}</h1>
                

                <form>
                    <div>
                        <label> Pseudo </label>
                        <input type="text" onChange={this.setName}></input>
                    </div>
                    <div>
                        <label>Couleur</label>
                        <select onChange={this.setColor}>
                            {
                                this.state.colors.map((color, index) => {
                                    return <option key={index} value={color}>{color}</option>
                                })
                            }
                        </select>
                    </div>
                     
                </form>
            </div>

        )
    }
}

export default Form