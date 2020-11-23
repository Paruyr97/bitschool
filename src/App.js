import './App.css';
import Animal from './animals/animals';
import Counter from './Counter/counter';

function App() {
  return (
    <div className="App">
      {/* <Animal animals={['rex', 'murka', 'chao', 'flyuk', 'kity', 'bety']}/> */}
      <Counter />
    </div>
  );
}

export default App;
