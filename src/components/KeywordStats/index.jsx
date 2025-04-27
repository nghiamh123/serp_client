import "./KeywordStats.scss";

export default function KeywordStats({ keywords }) {
  return (
    <div className="keyword-stats">
      <h3>Từ khóa phổ biến</h3>
      <ul className="keyword_list">
        {keywords.map(({ word, count }, idx) => (
          <li key={idx}>
            {word} ({count})
          </li>
        ))}
      </ul>
    </div>
  );
}
