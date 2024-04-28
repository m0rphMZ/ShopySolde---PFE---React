import React from 'react';
import Footer from '../Comps/Footer';
import { Link } from 'react-router-dom';
import { 
  Container,
   InfoSec,
   InfoRow,
   InfoColumn,
   TextWrapper,
   ImgWrapper,
   TopLine,
   Subtitle,
   Img,
   AboutBtn,
} from '../Comps/About-elements';

function About() {
  return (
<>

<InfoSec>
  <Container>
    <InfoRow>
      <InfoColumn>
        <TextWrapper>
          <TopLine>À propos de nous</TopLine>
          <Subtitle>
          ShopySolde est une plateforme de liquidation B2B / B2C qui relie les petites entreprises,
          les entrepreneurs et les particuliers à la recherche de revenus supplémentaires avec des sources
          d'inventaire de liquidation en vrac à revendre dans un but lucratif.
          </Subtitle>
          <Subtitle>
          Certains des plus grands détaillants au monde, ainsi que des fournisseurs de gros et de liquidation,
          vendent leurs stocks excédentaires sur notre platforme.
          Notre objectif est de permettre aux entrepreneurs de démarrer et de développer
          facilement leur entreprise ainsi qu'aux clients normaux qui cherchent à acheter
          des produits à prix réduit et remis à neuf à une fraction de ce qu'ils coûtent s'ils sont achetés dans les grands magasins de détail.
          </Subtitle>
          <Subtitle>
          Nous sommes une petite équipe ambitieuse,
          cherchant à aider les petites entreprises ainsi qu'à développer la nôtre,
          nous avons tous été touchés par la pandémie de différentes manières, et c'est notre façon d'aider la communauté.
          </Subtitle>
          <Link to="/">
          <AboutBtn> Explorez la plateforme</AboutBtn>
          </Link>
        </TextWrapper>
      </InfoColumn>
      <InfoColumn>
        <ImgWrapper>
        <Img src="/images/workspace.jpg" />
        </ImgWrapper>
      </InfoColumn>
    </InfoRow>
  </Container>
</InfoSec>










<Footer/>
</>
  );
}

export default About;
