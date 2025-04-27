import "./HeadingFilter.scss";

export default function HeadingFilter({ selected, onChange }) {
  return (
    <div className="heading_filter">
      <label>Lọc heading:</label>
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        <option value="">Tất cả</option>
        {["H1", "H2", "H3", "H4", "H5", "H6"].map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}
