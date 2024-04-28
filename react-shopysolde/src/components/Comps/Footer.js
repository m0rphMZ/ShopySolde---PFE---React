import React from 'react';
import '../../styles/Footer.css'; 
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Mailchimp from 'react-mailchimp-form'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Abonnez-vous pour être averti par e-mail lorsqu'un nouvel inventaire est répertorié.
        </p>
        <p className='footer-subscription-text'>
        Vous pouvez vous désabonner à tout moment.
        </p>

        <div className='input-areas'>
          
          <form>
            <Mailchimp 
            action='https://gmail.us1.list-manage.com/subscribe/post?u=ba1193e475adbfb2f4a6da428&amp;id=f6ab8d563e'
              
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: 'E-mail',
                  type: 'email',
                  required: true
                },
              ]}
              messages = {
                {
                  sending: "Envoi en cours...",
                  success: "Inscription Confirmée.",
                  error: "Une erreur interne inattendue s'est produite.",
                  empty: "Vous devez écrire un e-mail.",
                  duplicate: "Vous êtes déjà abonné.",
                  button: "S'abonner"
                }
              }
              className='footer-input'
              buttonClassName='btn--primary'
              />
          </form>
          
        </div>
      </section>


      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>FAQ</h2>
            <Link to='/About'>À propos.</Link>
            <Link to='/'>Terms of Service</Link>
            <Link to='/AdminLog'>Admin? Connectez-vous ici</Link>
          </div>

          <div class='footer-link-items'>
            <h2>Nous contacter</h2>
            <Link to='/Contact'>Contact</Link>
            <Link to='/Sell'>Devenez vendeur.</Link>
          </div>
        </div>
        
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Réseaux Sociaux</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              SHOPYSOLDE&nbsp;
              <i class= 'fas fa-dolly-flatbed'  />
            </Link>
          </div>
          <small class='website-rights'>SHOPYSOLDE © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
