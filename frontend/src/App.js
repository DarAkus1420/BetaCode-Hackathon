import './App.css';
import {useState} from 'react';

function App() {

  const [count, setCount] = useState(13);



  return (
    <div className="App">

      {count}

      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

    </div>


  );
}

export default App;
