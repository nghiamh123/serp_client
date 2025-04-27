import { useState } from "react";
import SearchForm from "./components/SearchForm";
import HeadingFilter from "./components/HeadingFilter";
import ResultTable from "./components/ResultTable";
import KeywordStats from "./components/KeywordStats";
import ExportCSV from "./components/ExportCSV";

import "./style.scss";

function App() {
  const [results, setResults] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (keyword) => {
    setLoading(true);
    const res = await fetch(
      `/api/search?keyword=${encodeURIComponent(keyword)}`
    );
    console.log("🚀 ~ handleSearch ~ res:", res);
    const data = await res.json();
    console.log("🚀 ~ handleSearch ~ data:", data);
    setResults(data);

    const keywordRes = await fetch(
      `/api/keywords?keyword=${encodeURIComponent(keyword)}`
    );
    console.log("🚀 ~ handleSearch ~ keywordRes:", keywordRes);
    const keywordData = await keywordRes.json();
    setKeywords(keywordData);

    setLoading(false);
  };

  const filteredResults = results.map((r) => ({
    ...r,
    headings: filter ? r.headings.filter((h) => h.tag === filter) : r.headings,
  }));

  return (
    <div className="app">
      <div className="seo-container">
        <div className="action_space">
          <h1 className="app-title">SEO Scraper</h1>
          <SearchForm onSearch={handleSearch} />
          <HeadingFilter selected={filter} onChange={setFilter} />
        </div>
        {loading ? (
          <p>Đang tải...</p>
        ) : (
          <>
            <KeywordStats keywords={keywords} />
            <ResultTable results={filteredResults} />
            <ExportCSV data={filteredResults} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
