import SongItem from "./SongItem"
import PropTypes from 'prop-types';

const SongList = ({ songsArray }) => {
  const items = 5;
  
  return (
    <div className="song-list">
      {songsArray.filter((currentSong, index) => index < items).map((currentSong,index) => (<SongItem {...currentSong} index={index} key={index}/>))}

      <div className="song-list__see-more">Ver mais</div>
    </div>
  )
}

SongList.propTypes = {
  songsArray: PropTypes.array.isRequired
};

export default SongList