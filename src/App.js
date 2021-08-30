import './App.css';
import { BookFuncComponent }  from './components/BookFuncComponent';

function App() {
    const printHello = () => {
        console.log ("here" + Math.random())
    }

    return (
    <div className="App">
      <BookFuncComponent name={`Books - Functional`}
                           onClicked={printHello}/>
    </div>

  );
}

export default App;
