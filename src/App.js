import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="">
      <nav>
        <img src={logo} width="100px" />
      </nav>
      <h1>Fun facts about React</h1>
      <ul>
        <li>It's composable</li>
        <li>It's declarative</li>
        <li>It's very powerful</li>
        <li>It's developed by Meta</li>
        <li>There are many skillful developer behined creating it</li>
      </ul>
    </div>
  );
}

export default App;
