import { Component } from "react";
import './myCss.css';
import styled from 'styled-components';

const Title = styled.h1`
    color: red;
    font-size: 80px;
`

class Form extends Component {
    state = ({
        className: ""
    })

    changeColorBlue = () => {
        this.setState ({
            className : "blue"
        })
    }

    changeColorRed = () => {
        this.setState ({
            className : "red"
        })
    }

    render() {
        return(
            <div>
                <Title> Commentaire </Title>
                <p className={this.state.className}>Texte bicolor</p>
                
                <button onClick={this.changeColorBlue}>Blue</button>
                <button onClick={this.changeColorRed}>Red</button>
            </div>
        )
    }
}

export default Form

/* 
condition
render () {
return ( 
    this.state.winner ?  h1   teaf h1    : h1 ndjndjz h1
)} */