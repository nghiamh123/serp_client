import { useState } from "react";

import "./SearchForm.scss";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="search_form">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Nhập từ khóa SEO..."
      />
      <button className="main_btn" type="submit">
        Tìm kiếm
      </button>
    </form>
  );
}
