import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: rgb(36,36,36);
  color: #fff;
`;

export const CartContainer = styled.div`
  /* width: 100vw; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(36,36,36);
  color: #fff;
`;


export const ProdNumberQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  font-size: 1.5rem;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #254b7c;
  object-fit: cover;
  transition: all 0.2s linear;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductsHeading = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 4rem;
  color: white;
`;
export const ProductsHeading2 = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 5rem;
  margin-top: 5rem;
  color: red;
`;



export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.4rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  font-size: 0.8em;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  background-color: transparent;
  color: #fff;
  padding: 8px 20px;
  border: 1px solid var(--primary);
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    color: #242424;
    transition: 250ms;
  }
`;

export const LoginButton = styled.button`
  background-color: transparent;
  color: black;
  padding: 15px 20px;
  border: 2px solid var(black);
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
  background: #242424;
  color: white;
  transition: 250ms;
  }
`;

export const ProfileButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: 3px solid var(--primary);
  transition: all 0.3s ease-out;
  cursor: pointer;
  border-radius: 2px;
  outline: none;
  padding: 8px 20px;
  font-size: 18px;


  &:hover {
    transition: all 0.3s ease-out;
  background: #fff;
  color: #242424;
  transition: 250ms;
  }
`;

export const CardsButton = styled.button`
  background-color: transparent;
  color: #242424;
  transition: all 0.3s ease-out;
  cursor: pointer;
  border-radius: 2px;
  outline: none;
  padding: 15px 20px;
  font-size: 18px;
  border-width: 3px;
  border-style: solid;
  border-color: #242424;
  margin-top: 40px;


  &:hover {
    transition: all 0.3s ease-out;
  background: #242424;
  color: #fff;
  transition: 250ms;
  }
`;

export const RegButton = styled.button`
  background-color: transparent;
  color: black;
  padding: 15px 20px;
  border: 2px solid var(black);
  transition: all 0.3s ease-out;
  cursor: pointer;
  justify-items: center;
  &:hover {
    transition: all 0.3s ease-out;
  background: #242424;
  color: white;
  transition: 250ms;
  }
`;

export const ProductButtonQuantity = styled.button`
  background-color: black;
  color: white;
  padding: 8px 20px;
  border: 1px solid var(--primary);
  transition: all 0.3s ease-out;
  cursor: pointer
  `;
