import Row from './components/Row'
import requests from "./requests.js"
import Banner from "./components/Banner.jsx"
function App() {

  return (
    <div className='bg-[#141414]'>

      <Banner fetchUrl={requests.find(r => r.title === "Trending").endPoint} />
      {requests.map(r => (
        <Row title={r.title} fetchUrl={r.endPoint} isVerticalImage={r.isVerticalImage} />
      ))}
    </div>
  )
}

export default App
