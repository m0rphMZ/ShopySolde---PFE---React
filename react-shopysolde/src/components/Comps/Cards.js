import React from 'react';
import '../../styles/Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';
import {
CardsButton
} from './ProductElements';

const Cards=({products}) =>{

  if (!products.length) return <p>Loading...</p>;

  return (
    <div className='cards'>
      <h1>DERNIERS PRODUITS AJOUTÉS!</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {products.slice(0, 4).map((product) => (
            <CardItem product={product}
            />
            ))}
          </ul>
          <h1>
          <Link to="/Products">
          <CardsButton>PARCOUREZ PLUS DE PRODUITS ICI!</CardsButton>
          </Link>
          </h1>
        </div>
      </div>
  );
}

export default Cards;