import React from "react";
import products from "./products_data";
import FilterableProductTable from "../template/FilterableProductTable";

const ProductPage = () => {
  const [filterText, setfilterText] = React.useState("");
  const [inStockOnly, setinStockOnly] = React.useState(false);

  const handleFilterTextChange = (e) => {
    setfilterText(e);
  };

  const handleInStockChange = (e) => {
    setinStockOnly(e);
  };

  return (
    <div>
      <FilterableProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        handleFilterTextChange={handleFilterTextChange}
        handleInStockChange={handleInStockChange}
        products={products}
      />
    </div>
  );
};
export default ProductPage;
