import styled from 'styled-components';

export const InfoSec = styled.div`
  min-height: 1000px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background: rgb(36,36,36);
    color: white;
    padding: 50px;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: 'row' ;
`;

export const InfoColumn = styled.div`
  margin-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 500px;
  display: flex;
  justify-content:  'flex-end';
`;

export const TopLine = styled.div`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  transform: scale(2);
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: '#f7f8fa';
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 24px;
  color: '#1c2237' ;
`;

export const Subtitle2 = styled.p`
  max-width: 440px;
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 24px;
  color: '#1c2237' ;
`;

export const Subtitle3 = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 12px;
  line-height: 24px;
  color: '#1c2237' ;
`;


export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : 'white')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: black;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 2px solid var(black);
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    color: white;
    background-color: ${({ primary }) => (primary ? '#0467FB' : 'black')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;