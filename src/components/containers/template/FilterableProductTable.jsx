import React from "react";
import SearchBar from "../organisms/SearchBar";
import ProductTable from "../organisms/ProductTable";

const FilterableProductTable = (props) => {
  const {
    filterText,
    inStockOnly,
    handleFilterTextChange,
    handleInStockChange,
  } = props;

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
};

export default FilterableProductTable;
