import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Artist from './pages/Artist';
import Songs from './pages/Songs';
import Song from './pages/Song';
import Aside from './components/Aside';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="main__main">

        <Aside />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artists' element={<Artists />} />
          <Route path='/songs' element={<Songs />} />
          <Route path='/song/:id' element={<Song />} />
          <Route path='/artist/:id' element={<Artist />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App