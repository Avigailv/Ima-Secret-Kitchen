import { useEffect, useState } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://ima-secret-kitchen.onrender.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipes(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>המתכונים של אמא 🍲</h1>

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.imageUrl} width="200" />
        </div>
      ))}
    </div>
  );
}