import ItemList from "./ItemList";
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';
import PropTypes from 'prop-types';
import Footer from "./Footer";

const Main = ({ type }) => {
  return (
    <div className="main">
      {type === 'artists' || type === undefined ? (
      <ItemList title='Artistas' items={5} itemsArray={artistArray} path='/artists' idPath='/artist' />)
      :
      (<> </>)}

      {type === 'songs' || type === undefined ? (
      <ItemList title='Músicas' items={10} itemsArray={songsArray} path='/songs' idPath='/song' />)
      :
      (<> </>)}

      <Footer />
    </div>
  )
};

Main.propTypes = {
  type: PropTypes.string.isRequired
};

export default Main