import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Error from '../../components/Error'
import Home from '../../pages/Home'

function Routers () {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </Router>
  )
}

export default Routers