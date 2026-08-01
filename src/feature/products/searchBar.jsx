function SearchBar({ value = "", onChange, placeholder = "Search products..." }) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange?.(event.target.value)}
      className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-slate-500"
      aria-label="Search products"
    />
  );
}

export default SearchBar;