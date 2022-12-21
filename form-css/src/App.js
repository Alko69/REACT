import './App.css';
import Resultat from './Game';
import { Button } from 'react-bootstrap';

function App() {

  const sayHello = () => {
    alert('Hello');
  }

  return (
    <div className="App">
      <Resultat/>
      <Button style={{backgroundColor : 'yellow', color: 'blue'}} onClick={sayHello}>Say hello</Button> 
    </div>
  );
}

export default App;
