import React from 'react';
import { Link } from 'react-router-dom';

const CardItem=({product})=> {

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to="/Products">
          <figure className='cards__item__pic-wrap' data-category={product.price.formatted_with_symbol}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={product.media.source }
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{product.name}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;