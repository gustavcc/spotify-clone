// import React from 'react';
import { Link } from "react-router-dom";
import Player from "../components/Player";
import PropTypes from "prop-types";

const SongBar = ({ idArtist, songImage, nameSong, artist, duration, randomIdFromArtist ,lenghtArraySongs }) => {
  return (
    <div className="song__bar">
      <Link to={`/artist/${idArtist}`} className="song__image-image">
        <img width={75} height={75} src={songImage} alt={`Capa da música ${artist}`} />
      </Link>

      <Player duration={duration} randomIdFromArtist={randomIdFromArtist} lenghtArraySongs={lenghtArraySongs} />

      <div>
        <p className="song__name">{nameSong}</p>
        <p>{artist}</p>
      </div>
    </div>
  )
}

SongBar.propTypes = {
  idArtist: PropTypes.string.isRequired,
  songImage: PropTypes.string.isRequired,
  nameSong: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  randomIdFromArtist: PropTypes.number.isRequired,
  lenghtArraySongs: PropTypes.number.isRequired
};

export default SongBar