import React from 'react';
import { AddShoppingCart} from '@material-ui/icons';



import {
  ProductWrapper,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
  } from './ProductElements';

const Product = ( {product, onAddToCart} ) => {


    console.log(product);

    

    return (

                <ProductWrapper>
                <ProductCard>

                <ProductImg src={product.media.source } />
                <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc dangerouslySetInnerHTML={{__html: product.description} }></ProductDesc>
                <ProductPrice>{product.price.formatted_with_symbol}</ProductPrice>
                <ProductButton onClick={() => onAddToCart (product.id, 1) }><AddShoppingCart/></ProductButton>
                </ProductInfo>
                    </ProductCard>  
                    </ProductWrapper>

        
    )
}

export default Product
