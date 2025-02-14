import { Link, useParams } from "react-router-dom";
import Player from "../components/Player"
Link

const Song = () => {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__container--image">
          <img src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24" alt={`Capa do artista $`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/1`} className="song__image-image">
          <img width={75} height={75} src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24" alt={`Capa da música $`} />
        </Link>
          <Player />
        <div>
          <p className="song__name">Ultima saudade</p>
          <p>Henrique e Juliano</p>
        </div>
        
      </div>
    </div>
  )
}

export default Song