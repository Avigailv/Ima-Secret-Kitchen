import { Link } from "react-router-dom";

export default function Navbar() {
  const categories = [
    "שבת",
    "יום טוב",
    "פסח",
    "שבועות",
    "ראש השנה",
    "סוכות",
    "עוגות",
  ];

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/">כל המתכונים</Link>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {categories.map((cat) => (
          <Link key={cat} to={`/category/${cat}`}>
            {cat}
          </Link>
        ))}
      </div>
    </nav>
  );
}