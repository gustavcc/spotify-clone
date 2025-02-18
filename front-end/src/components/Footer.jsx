import logoSpotify from '../assets/logo/logo2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='header'>
        <Link to='/'>
          <img className='header__image' src={logoSpotify} alt="Logo do Spotify" />
        </Link>

        <p>@Copyright 2025 | Gustavo Cardoso</p>
      </div>
    </>
  )
}

export default Footer