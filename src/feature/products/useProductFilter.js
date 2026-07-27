import { useState, useMemo } from "react";

export function useProductFilter(products = []) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filters, setFilters] = useState({});

  const filteredProducts = useMemo(() => {
    if (!Array.isArray(products)) return [];

    return products
      .filter((p) =>
        p.name ? p.name.toLowerCase().includes(search.toLowerCase()) : true,
      )
      .filter((p) => !filters.category || p.category === filters.category)
      .sort((a, b) => {
        if (sort === "price") return (a.price || 0) - (b.price || 0);
        if (sort === "name") return (a.name || "").localeCompare(b.name || "");
        return 0;
      });
  }, [products, search, sort, filters]);

  return {
    search,
    setSearch,
    sort,
    setSort,
    filters,
    setFilters,
    filteredProducts,
  };
}

export default useProductFilter;
