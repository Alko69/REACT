import React, {Component} from "react";
import Cars from './Cars';
import Wrapper from "./Wrapper";
import MyHeader from "./MyHeader";

class MyCars extends Component {

    state = {
        car: ['Ford', 'Mercedes', 'Fiat']
    }

    noCopy = () => {
        alert('Merci de ne pas copier le texte');
    }

    upperText = (e) => {
        e = e.target;
        e.classList.toggle('uppered');
    }


    render () {
        const {title} = this.props;
        const {color} = this.props;
        return (
        <div>
            <Wrapper>
                <MyHeader myStyle = {color}>
                    {title}
                    <p onClick={this.changeText}>lorem ipsum azodi azdhnua frf af</p>
                </MyHeader>
            </Wrapper>
            <Cars car={this.state.car[0]} />
            <Cars car={this.state.car[1]} />
            <Cars car={this.state.car[2]} />
        </div>
        );
    }
}


export default MyCars;
