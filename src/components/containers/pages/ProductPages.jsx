import React from 'react';
import PRODUCTS from './PRODUCTS'; 
import FilterableProductTable from '../template/FilterableProductTable';

const PRODUCTS_PAGE = () =>{
    return (
        <div>
         <FilterableProductTable products={PRODUCTS}/>
        </div>
    )
} ;
export default PRODUCTS_PAGE;