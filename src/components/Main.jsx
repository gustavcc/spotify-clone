import ItemList from "./ItemList";
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const Main = () => {
  return (
    <>
      <div className="main">
        {/* Artistas */}
        <ItemList title='Artistas' items={10} itemsArray={artistArray} path='/artists' idPath='/artist' /> 

        {/* Músicas */}
        <ItemList title='Músicas' items={20} itemsArray={songsArray} path='/songs' idPath='/song' />
      </div>
    </>
  )
}

export default Main