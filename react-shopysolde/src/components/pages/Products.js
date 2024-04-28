import React,{useState} from 'react';
import Product from '../Comps/Product';
import Footer from '../Comps/Footer';
import {InputBase} from '@material-ui/core';
import '../../styles/Search.css'
import SearchIcon from '@material-ui/icons/Search';



import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductsHeading2,
} from '../Comps/ProductElements';
import Spinner from "../Comps/Spinner"




const Products = ({ categories, onAddToCart }) => {

  const [searchTerm, setSearchTerm] = useState("");

  if (!categories.length) return <Spinner/>;

return (

  <>
  <ProductsContainer>
  
      
    <h1 > 

    <div className='search_input'>
            <div className='searchIcon'>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          
            </h1>





    
    
    {categories.map(Category => {
      return (

        

        <>

        {Category.productsData.slice(0, 1).map((product, key) => {

      if (!product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
        return (

          <ProductsHeading>Catégorie : {Category.name}
          <ProductsHeading2>Aucun résultat trouvé dans cette catégorie</ProductsHeading2>
          </ProductsHeading>

          
        )

        }

          


        })}
            


        

        
        
        {Category.productsData.map((product, key) => {


            
            


            if (searchTerm == "") {

              

              return (

                


                <>
                <ProductsHeading>Categorie : {Category.name}</ProductsHeading>
                <ProductWrapper >
              <Product product= {product} onAddToCart={onAddToCart} />
              </ProductWrapper>

              </>


              )

            } else if (product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {

              return (
                <>
                <ProductsHeading>Categorie : {Category.name}</ProductsHeading>
                <ProductWrapper>
              <Product product= {product} onAddToCart={onAddToCart} />
              </ProductWrapper>

              </>
              )
            }

            
    })}

        </>
      )
    })}
    </ProductsContainer>
    <Footer />
  </>
);
}
export default Products;
