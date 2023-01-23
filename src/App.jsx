import reactLogo from './assets/react.svg'
import './assets/styles/App.css'
import Game from './components/Game'

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Game />
    </div>
  )
}

export default App
