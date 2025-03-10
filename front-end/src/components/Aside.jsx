import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import brasileirinho from "../assets/logo/brasileirinho.jpeg";
import maistocadas from "../assets/logo/mais.jpeg";
import music from "../assets/logo/2025.jpeg";

const Aside = () => {
  return (
    <div className="aside">
      <div className="aside__title">
        <FontAwesomeIcon className="asite-title__icon"  icon={faBookmark} fade style={{color: "#a5a5a7",}}/>
        <p>Sua Biblioteca</p>
      </div>

      <div className="aside__items">
        <div className="aside__block">
          <img src={brasileirinho} alt='Capa da Playlist' />
          <p>Brasileirinho</p>
        </div>
        <div className="aside__block">
          <img src={maistocadas} alt='Capa da Playlist' />
          <p>Mais tocadas</p>
        </div>
        <div className="aside__block">
          <img src={music} alt='Capa da Playlist ' />
          <p>Mais Ouvidas 2025</p>
        </div>
        <div className="aside__block">
          <img src={brasileirinho} alt='Capa da Playlist' />
          <p>Brasileirinho</p>
        </div>
        <div className="aside__block">
          <img src={maistocadas} alt='Capa da Playlist' />
          <p>Mais tocadas</p>
        </div>
        <div className="aside__block">
          <img src={music} alt='Capa da Playlist ' />
          <p>Mais Ouvidas 2025</p>
        </div>
        <div className="aside__block">
          <img src={brasileirinho} alt='Capa da Playlist' />
          <p>Brasileirinho</p>
        </div>
        <div className="aside__block">
          <img src={maistocadas} alt='Capa da Playlist' />
          <p>Mais tocadas</p>
        </div>
        <div className="aside__block">
          <img src={music} alt='Capa da Playlist ' />
          <p>Mais Ouvidas 2025</p>
        </div>
      </div>

    </div>
  )
}

export default Aside