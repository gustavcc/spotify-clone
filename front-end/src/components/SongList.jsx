import SongItem from "./SongItem";
import PropTypes from 'prop-types';
import { useState } from "react";

const SongList = ({ songsArray }) => {
  let [items, setItems] = useState(5);
  
  return (
    <div className="song-list">
      {songsArray.filter((currentSong, index) => index < items).map((currentSong,index) => (<SongItem {...currentSong} index={index} key={index}/>))}

      <div className="song-list__see-more" onClick={() => {setItems(items+5)}} >Ver mais</div>
    </div>
  )
}

SongList.propTypes = {
  songsArray: PropTypes.array.isRequired
};

export default SongList