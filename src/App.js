/*
 * @Autor: hanjy
 * @Date: 2021-05-03 15:37:24
 * @LastEditors: hanjy
 * @LastEditTime: 2021-05-03 16:07:12
 * @Description: 
 * @FilePath: /reacttest1/src/App.js
 */
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>hello <span className="color-pink">{props.name}</span></h1>
    </div>
  );
}
App.defaultProps = {
  name: 'defalutname'
}

export default App;
