import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

type Recipe = {
  id: number;
  title: string;
  imageUrl?: string;
};

// export default function Home() {
//   const [recipes, setRecipes] = useState<Recipe[]>([]);

//   useEffect(() => {
//     fetch("https://ima-secret-kitchen.onrender.com/recipes")
//       .then((res) => res.json())
//       .then((data) => setRecipes(data))
//       .catch((err) => console.log(err));
//   }, []);

//   if (!recipes.length) return <p>טוען...</p>;

//   return (
//     <div className="home-container">
//       <h1 className="title">המתכונים של אמא</h1>


//       <div className="recipes-grid">
//         {recipes.map((recipe) => (
//           <div key={recipe.id} className="recipe-card">
            
//             <Link to={`/recipe/${recipe.id}`} className="recipe-link">
//               <h2 className="recipe-title">{recipe.title}</h2>
//             </Link>

//             {recipe.imageUrl && (
//               <img
//                 src={recipe.imageUrl}
//                 alt={recipe.title}
//                 className="recipe-image"
//               />
//             )}

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("https://ima-secret-kitchen.onrender.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.log(err));
  }, []);

  if (!recipes.length) return <div className="loading">אמא כבר מסיימת לבשל... 🍲</div>;

  return (
    <div className="home-container">
      {/* באנר משפחתי */}
      <header className="hero-banner">
        <div className="hero-text">
          <h1 className="main-title">הספר הסודי של אמא</h1>
          <p className="hero-description">
            כל הטעמים, הריחות והזכרונות מהמטבח הכי הכי בעולם.
            בנינו את האתר הזה כדי שכל המתכונים של אמא יהיו תמיד איתנו.
          </p>
        </div>
      </header>

      <section className="our-story">
        <h2>למה בנינו את האתר? ❤️</h2>
        <p>
          כי אין כמו האוכל של אמא, ורצינו שגם כשנהיה גדולים נוכל להכין את הקציצות, 
          המרק והעוגות שתמיד מחכים לנו על השולחן.
        </p>
      </section>

      <main className="content-area">
        <h2 className="grid-title">המתכונים שכולנו אוהבים:</h2>
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="card-image-box">
                {recipe.imageUrl ? (
                  <img src={recipe.imageUrl} alt={recipe.title} />
                ) : (
                  <div className="placeholder-image">🍲</div>
                )}
              </div>
              <div className="card-content">
                <h3>{recipe.title}</h3>
                <Link to={`/recipe/${recipe.id}`} className="recipe-btn">
                  בואו נבשל!
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>נבנה באהבה על ידי הילדים של אמא | 2024</p>
      </footer>
    </div>
  );
}