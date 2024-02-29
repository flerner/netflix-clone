import './App.css'
import Row from './components/Row'
import requests from "./requests.js"
function App() {


  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Netflix Clone</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />

    </div>

  )
}

export default App
