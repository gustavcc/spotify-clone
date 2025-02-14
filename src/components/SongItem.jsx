import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const SongItem = ({ id, image, name, index }) => {
  return (
    <Link to={`/song/${id}`} className="song-item">

      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album">
          <img className="song-item__image" src={image} alt={`Imagem da música ${name}`} />

          <p className="song-item__name">{name}</p>

        </div>
      </div>
      <p>2:30</p>
    </Link>
  )
}

SongItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
  duraction: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default SongItem