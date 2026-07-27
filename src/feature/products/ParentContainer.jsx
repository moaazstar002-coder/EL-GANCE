import SearchBar from "./searchBar";
import Sort from "./Sort";
import Filter from "./Filter";
import ProductList from "./ProductList";
import useProductFilter from "./useProductFilter";

const INITIAL_PRODUCTS = [
  { id: 1, name: "Shoes", price: 100, category: "shoes" },
  { id: 2, name: "Jacket", price: 200, category: "clothing" },
  { id: 3, name: "Sneakers", price: 150, category: "shoes" },
];

function ProductsPage() {
  const {
    search,
    setSearch,
    sort,
    setSort,
    setFilters,
    filteredProducts,
  } = useProductFilter(INITIAL_PRODUCTS);

  return (
    <>
      <SearchBar value={search} onChange={setSearch} />
      <Sort value={sort} onChange={setSort} />
      <Filter setFilters={setFilters} />

      <ProductList products={filteredProducts} />
    </>
  );
}

export default ProductsPage;