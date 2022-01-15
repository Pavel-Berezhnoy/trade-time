import '../styles/App.css';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './Content';
import './../index.css';

function App() {
  return (
    <Router>
      <div className="App h-full flex flex-col bg-gradient-to-b from-test1 to-test">
        <header><Header></Header></header>
        <div className="flex-auto"><Content></Content></div>
      </div>
    </Router>
  );
}

export default App;
