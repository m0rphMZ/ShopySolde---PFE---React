import React from 'react';
import '../../styles/App.css';
import '../../styles/HeroSection.css';
import { Link } from 'react-router-dom';
import {
  ProfileButton
} from '../Comps/ProductElements';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='react-shopysolde/public/videos/liquidation.mp4' autoPlay loop muted />
      <h1>BIENVENUE!</h1>
      <p>Achetez des stocks auprès de géants de l'industrie comme Ebay et Amazon.</p>
      <div className='hero-btns'>
        
      <Link to="/Products">
        <ProfileButton>
          MAGASINEZ ICI
        </ProfileButton>
        </Link>

      </div>
    </div>
  );
}

export default HeroSection;
