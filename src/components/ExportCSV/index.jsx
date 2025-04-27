import { CSVLink } from "react-csv";

export default function ExportCSV({ data }) {
  const csvData = data.flatMap(({ url, title, headings }) =>
    headings.map((h) => ({
      url,
      title,
      tag: h.tag,
      heading: h.text,
    }))
  );

  return (
    <CSVLink data={csvData} filename="seo-headings.csv">
      <button>Export CSV</button>
    </CSVLink>
  );
}
