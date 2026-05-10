// export default function Home() {
//   return (
//     <div>
//       <h1>המתכונים של אמא 🍲</h1>
//       <p>בחרי קטגוריה או צפי בכל המתכונים</p>
//     </div>
//   );
// }



import { useEffect, useState } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://ima-secret-kitchen.onrender.com/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>המתכונים של אמא 🍲</h1>
      <p>כל המתכונים מהמערכת</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {recipes.map((r) => (
          <div key={r.id}>
            <img src={r.imageUrl} width="100%" />
            <h3>{r.title}</h3>
            <p>{r.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}