import './App.css';
import Animal from './animals/animals';

function App() {
  return (
    <div className="App">
      <Animal animals={['rex', 'murka', 'chao', 'flyuk', 'kity', 'bety']}/>
    </div>
  );
}

export default App;
