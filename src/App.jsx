import Row from './components/Row'
import requests from "./requests.js"
import Banner from "./components/Banner.jsx"
function App() {

  return (
    <div className='bg-[#141414] flex flex-col' >

      <Banner fetchUrl={requests.find(r => r.title === "Trending").endPoint} className="" />
      <div className=''>
        {requests.map(r => (
          <Row title={r.title} fetchUrl={r.endPoint} isVerticalImage={r.isVerticalImage} />
        ))}
      </div>

    </div>
  )
}

export default App
