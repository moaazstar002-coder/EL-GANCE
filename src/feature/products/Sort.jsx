function Sort({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="price">Price</option>
      <option value="name">Name</option>
    </select>
  );
}  

export default Sort;
