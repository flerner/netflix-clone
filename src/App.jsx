import Row from './components/Row'
import requests from "./requests.js"

function App() {

  return (
    <div className='bg-[#141414]'>
      <h1 className='text-3xl font-bold underline'>Netflix Clone</h1>
      {requests.map(r => (
        <Row title={r.title} fetchUrl={r.endPoint} isVerticalImage={r.isVerticalImage} />
      ))}
    </div>
  )
}

export default App
