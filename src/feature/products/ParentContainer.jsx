import SearchBar from "./SearchBar";
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
    category,
    setCategory,
    categories,
    filteredProducts,
  } = useProductFilter(INITIAL_PRODUCTS);

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <Sort value={sort} onChange={setSort} />
      </div>

      <Filter
        categories={categories}
        activeCategory={category}
        onChangeCategory={setCategory}
      />

      <ProductList products={filteredProducts} />
    </section>
  );
}

export default ProductsPage;
