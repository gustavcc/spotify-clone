import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep, faCirclePlay, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const Player = ({ duration, randomIdFromArtist, lenghtArraySongs }) => {
  let { id } = useParams();
  let previous;
  let next;
  id === '1' ? previous = 1 : previous = Number(id)-1;
  id == Number(lenghtArraySongs) ? next = Number(lenghtArraySongs) : next = Number(id)+1;  

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${previous}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon className="player__icon player__icon--play" icon={faCirclePlay} />

        <Link to={`/song/${next}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>
      <div className="player__progress">
        <p>00:00</p>
        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>
    </div>
  )
}

Player.propTypes = {
  duration: PropTypes.string.isRequired,
  randomIdFromArtist: PropTypes.number.isRequired,
  lenghtArraySongs: PropTypes.number.isRequired
}

export default Player