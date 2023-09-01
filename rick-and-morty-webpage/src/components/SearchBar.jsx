function SearchBar(props) {
  let value;
  return (
    <div>
      <input type="search" value={value} />
      <button onClick={() => props.onSearch(value)}>Agregar</button>
    </div>
  );
}

export default SearchBar;
