import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../../styles/offers.css';
import Footer from '../Comps/Footer';
import Spinner from "../Comps/Spinner"
import {Link} from "react-router-dom"

const Offers = ({ products }) => {
  const [current, setCurrent] = useState(0);
  const length = products.length;
  if (!products.length) return <Spinner/>;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(products) || products.length <= 0) {
    return null;
  }

   
  return (
    <>
    <h1 className="deals">
    Offres spéciales Dans chaque catégorie en ce moment
    </h1>
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {products.map((product, index) => {
        return (
          <>
          
          
          <div 
          
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <>
              <Link to="/products">
              <figure className='offer-wrap' data-category={product.price.formatted_with_symbol}>
              <img src={product.media.source} alt='Prod Image' className='image' />
              </figure>
              </Link>
              <h1 className="pricered">-50%</h1> 
              <h1 className="font">{product.name}</h1> 
              </>
            )}
          </div>
          </>
        );
      })}
    </section>
    <Footer />
    </>
  );
};

export default Offers;