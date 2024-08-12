import './css/App.css'
import Home from './views/Home'
import Response from './views/Response'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/calorie-calculator' element={<Home />} />
          <Route path='/calorie-calculator/response' element={<Response />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
