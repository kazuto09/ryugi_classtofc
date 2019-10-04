import React from 'react';
import SearchBar from '../organisms/SearchBar';
import ProductTable from '../organisms/ProductTable';

const FilterableProductTable = props =>{
  
  const [filterText,setfilterText] = React.useState('');
  const [inStockOnly,setinStockOnly] = React.useState(false);


  const handleFilterTextChange = e =>{
    setfilterText(e);
  };

  const handleInStockChange = e =>{
    setinStockOnly(e);
  };
    
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={handleFilterTextChange}
          onInStockChange={handleInStockChange}
        />
        <ProductTable
          products={props.products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }

export default FilterableProductTable;
