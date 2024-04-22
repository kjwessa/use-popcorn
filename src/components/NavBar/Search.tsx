import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="min-w-44 rounded-2xl border-none px-6 py-3 text-slate-600 placeholder:text-slate-600 focus:text-slate-800 focus:outline-none focus-visible:text-slate-700"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    ></input>
  );
}

export default Search;
