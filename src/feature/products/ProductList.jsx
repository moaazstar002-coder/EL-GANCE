function ProductList({ products = [] }) {
  if (!products.length) {
    return <p className="text-slate-500">No products found 😢</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <article key={product.id} className="rounded border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800">{product.name}</h3>
          <p className="mt-2 text-sm uppercase tracking-wide text-slate-500">{product.category}</p>
          <p className="mt-4 text-base font-medium text-slate-900">${product.price}</p>
        </article>
      ))}
    </div>
  );
}

export default ProductList;