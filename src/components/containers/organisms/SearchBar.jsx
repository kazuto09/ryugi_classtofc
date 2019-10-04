import React from 'react';

const SearchBar = props =>{

  return (
    
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={e => props.onFilterTextChange(e.target.value)}
          value={props.FilterText}
          />
        <p>
          <input
            type="checkbox"
            onChange={e => props.onInStockChange(e.target.checked)}
            checked={props.inStockOnly}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }

export default SearchBar;
