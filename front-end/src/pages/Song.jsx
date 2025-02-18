import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";
import SongBar from "../components/SongBar";

const Song = () => {
  const { id } = useParams();
  const lenghtArraySongs = songsArray.length;

  const { name, image, duration, audio, artist } = songsArray.filter((currentSong) => currentSong.id === Number(id))[0]; 

  const artistObj = artistArray.filter((currentArtist) => currentArtist.name === artist)[0]; 

  const songsArrayFromArtist = songsArray.filter((currentSongObj) => currentSongObj.artist === artist); 

  const indexRandom = Math.floor(Math.random() * songsArrayFromArtist.length);

  const randomIdFromArtist = songsArrayFromArtist[indexRandom].id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__container--image">
          <img src={`${image}`} alt={`Capa do artista ${artist}`} />
        </div>
      </div>

      <SongBar lenghtArraySongs={lenghtArraySongs} randomIdFromArtist={randomIdFromArtist} duration={duration} idArtist={artistObj.id} songImage={artistObj.image} nameSong={name} artist={artist} />
    </div>
  )
}

export default Song