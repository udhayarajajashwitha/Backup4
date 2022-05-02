import logo from './logo.svg';
import './App.css';
import Greeting from './component/001-fcunctionCom';
import Greet from './component/002-classCom';
import Message from './component/003-stateCom';
import Countercom from './component/004-counterClassCom'
import FunctioncounterCom from './component/005-counterFunctionCom'
import Apidata from './component/006-apiDataUseeffect'
import Listcom from './component/007-ListandKeyCom';

function App() {
  return (
    <div className="App">
      <Listcom />
      {/* <Apidata /> */}
      {/* <FunctioncounterCom />
      <Countercom />
      <Message />
      <Greeting firstname="Udhaya" lastname="Raja">
        <p>Hi I am Udhaya here!</p>
        <button>action</button>
      </Greeting>
      <Greeting firstname="regan" lastname="Amrose">
        <p>Hi I am Regan here!</p>
      </Greeting>
      <Greet firstname="Udhaya" lastname="Raja">
        <p>Hi I am Udhaya here!</p>
        <button>action</button>
      </Greet>
      <Greet firstname="regan" lastname="Amrose">
        <p>Hi I am Regan here!</p>
      </Greet> */}
    </div>
  );
}

export default App;
