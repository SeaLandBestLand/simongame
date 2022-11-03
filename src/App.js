import { useEffect } from 'react';
import './App.css';
import Game from './game';

function App() {
  useEffect(() => {
    document.title = 'Simon Says';
  }, []);

  return (
    <>
    <div className='main center bg-background'>
      <h1 id='level-title'>Press A Key to Start</h1>
      <div>
        <div className='row'>

          <button id='green' className='btn bg-green' onClick={() => {Game('green')}}>

          </button>

          <button id='red' className='btn bg-red' onClick={() => {Game('red')}}>

          </button>
        </div>

        <div className='row'>

          <button id='yellow' className='btn bg-yellow' onClick={() => {Game('yellow')}}>

          </button>

          <button id='blue' className='btn bg-blue' onClick={() => {Game('blue')}}>

          </button>

        </div>

      </div>
    </div>
      
    </>
  );
}

export default App;
