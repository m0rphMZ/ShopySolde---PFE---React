import React from 'react';
import { Link } from 'react-router-dom';
import { 
Container,
 Button ,
 InfoSec,
 InfoRow,
 InfoColumn,
 TextWrapper,
 ImgWrapper,
 TopLine,
 Img,
 Heading,
 Subtitle,
} from '../Comps/NotFound.elements';


function PageNotFound() {
  return (
    <>
      <InfoSec >
        <Container>
          <InfoRow >
            <InfoColumn>
              <TextWrapper>
                <TopLine> Page non trouvée </TopLine>
                <Subtitle > Nous n'avons pas trouvé la page que vous recherchez</Subtitle>
                <Link to='/'>
                  <Button>
                    RETOUR À L'ACCUEIL
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <Img src='/images/notfound.png' />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default PageNotFound;