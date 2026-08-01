function Filter({ categories = [], activeCategory = "all", onChangeCategory }) {
  const options = ["all", ...categories];

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((category) => {
        const isActive = category === activeCategory;
        const label = category === "all" ? "All" : category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChangeCategory?.(category)}
            aria-pressed={isActive}
            className={[
              "rounded-full border px-3 py-1.5 text-sm transition-colors",
              isActive
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-slate-400",
            ].join(" ")}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
