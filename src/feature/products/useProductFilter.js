import { useMemo, useState } from "react";

const normalizeText = (value = "") => value.trim().toLowerCase();

export function useProductFilter(products = []) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => {
    const uniqueCategories = new Set();

    (Array.isArray(products) ? products : []).forEach((product) => {
      if (product?.category) {
        uniqueCategories.add(product.category);
      }
    });

    return Array.from(uniqueCategories);
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!Array.isArray(products)) return [];

    const searchTerm = normalizeText(search);

    return [...products]
      .filter((product) => {
        const matchesSearch =
          !searchTerm || normalizeText(product?.name).includes(searchTerm);
        const matchesCategory =
          category === "all" || product?.category === category;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        switch (sort) {
          case "price-low":
            return (a.price ?? 0) - (b.price ?? 0);
          case "price-high":
            return (b.price ?? 0) - (a.price ?? 0);
          case "name":
            return String(a.name ?? "").localeCompare(String(b.name ?? ""));
          default:
            return 0;
        }
      });
  }, [products, search, sort, category]);

  return {
    search,
    setSearch,
    sort,
    setSort,
    category,
    setCategory,
    categories,
    filteredProducts,
  };
}

export default useProductFilter;
