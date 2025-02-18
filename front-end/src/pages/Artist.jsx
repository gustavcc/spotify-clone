import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import Footer from "../components/Footer";

const Artist = () => {
  const { id } = useParams();

  const { name, banner } = artistArray.filter((currentArtist) => currentArtist.id === Number(id))[0]; 

  const songsArrayFromArtist = songsArray.filter((currentSongs) => currentSongs.artist === name);

  const indexRandom = Math.floor(Math.random() * songsArrayFromArtist.length);

  const randomIdFromArtist = songsArrayFromArtist[indexRandom].id;

  return (
    <div className="artist">
      <div className="artist__header" style={{backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`}}>
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songsArray={songsArrayFromArtist} />
      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon className="single-item__icon single-item__icon--artist" icon={faCirclePlay} />
      </Link>

      <Footer />
    </div>
  )
}

export default Artist