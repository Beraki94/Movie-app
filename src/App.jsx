import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Filter from './components/Filter'
import MovieDetail from './components/MovieDetail'

function App() {

  return (
    <BrowserRouter>
        <header>
        <Link to="/">Home</Link>
        </header>
      <Routes>
        <Route path='/' element={<Filter/>}/>
        <Route path='/:id' element={<MovieDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
