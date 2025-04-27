import "./ResultTable.scss";

export default function ResultTable({ results }) {
  return (
    <table className="result_table">
      <thead>
        <tr>
          <th>URL</th>
          <th>Title</th>
          <th>Headings</th>
        </tr>
      </thead>
      <tbody>
        {results.map((res, idx) => (
          <tr key={idx}>
            <td>
              <a href={res.url} target="_blank">
                {res.url}
              </a>
            </td>
            <td>{res.title}</td>
            <td>
              {res.headings.map((h, i) => (
                <div key={i} className="heading_tag">
                  <strong>{h.tag}:</strong> {h.text}
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
