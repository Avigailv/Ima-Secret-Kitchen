import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const categories = [
    "שבת",
    "יום טוב",
    "פסח",
    "שבועות",
    "ראש השנה",
    "סוכות",
    "עוגות",
    "הכל",
  ];

  return (
    <nav className="navbar">
      {/* <Link to="/" className="logo">
        כל המתכונים 🍲
      </Link> */}

      <div className="nav-links">
        {categories.map((cat) => (
          <Link key={cat} to={`/category/${cat}`} className="nav-link">
            {cat}
          </Link>
        ))}
      </div>
    </nav>
  );
}