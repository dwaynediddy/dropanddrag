import './App.css';
import Board from './components/Board'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <main className="main">
        <Board id="Board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p>Card one</p>
          </Card>
        </Board>

        <Board id="Board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p>Card two</p>
          </Card>
        </Board>
      </main>
    </div>
  );
}

export default App;
