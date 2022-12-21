import { Component } from "react";
import { Alert, Container, Button } from "react-bootstrap";

class Resultat extends Component {
    state = {
        name: "Mario",
        winner: true
    }

    changeState = () => {
        this.setState ({
            winner: !this.state.winner
        })
    }

    render() {

        const result = this.state.winner ? `Bravo ${this.state.name}` : `Perdu`;
        const alert = this.state.winner ? `primary` : `danger`;
        const greenB = {
            backgroundColor: "green",
            color: "black"
        }
            return (
                    <Container>
                        <Alert variant={alert}>
                            {result}
                        </Alert>
                        <Button style={greenB} onClick={this.changeState}>Black</Button>
                    </Container>
            )
    }
}

export default Resultat