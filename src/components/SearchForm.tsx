type SearchFormProps = {
  searchText: string;
  setSearchText: (value: string) => void;
};

export default function SearchForm({ searchText, setSearchText }: SearchFormProps) {
  return (
    <form onSubmit={(event) => event.preventDefault()} action="#" className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        spellCheck="false"
        type="text"
        required
        placeholder="Search technology..."
      />
    </form>
  );
}
