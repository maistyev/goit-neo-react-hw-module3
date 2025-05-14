import css from "./SearchBox.module.css";

function SearchBox({ handleFilterChange }) {
  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        placeholder="Search..."
        id="search"
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default SearchBox;
