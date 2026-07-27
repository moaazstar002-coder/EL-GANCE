function Filter({ setFilters }) {
  return (
    <div>
      <button onClick={() => setFilters({ category: "shoes" })}>
        Shoes
      </button>
    </div>
  );
}   

export default Filter;
