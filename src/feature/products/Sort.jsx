const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "name", label: "Name" },
];

function Sort({ value = "featured", onChange }) {
  return (
    <label className="flex items-center gap-2 text-sm text-slate-700">
      <span>Sort by</span>
      <select
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        className="rounded border border-slate-300 bg-white px-2 py-1.5"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Sort;
