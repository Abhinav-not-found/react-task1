import Hero from "./components/blocks/hero"
import Navbar from "./components/blocks/navbar"
import data from "./utils/data"

function App() {
  return (
    <div className=''>
      <Navbar />
      <Hero data={data} />
    </div>
  )
}

export default App
