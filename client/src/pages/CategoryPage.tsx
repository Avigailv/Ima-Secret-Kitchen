import { useEffect, useState } from "react";
import { getRecipes } from "../services/recipesService";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { name } = useParams();
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    getRecipes().then((data) => {
      console.log("DATA FROM SERVER:", data);

      const filtered = data.filter(
        (r: any) => r.category === name
      );

      setRecipes(filtered);
    });
  }, [name]);

  return (
    <div>
      <h1>{name}</h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {recipes.map((r) => (
          <div key={r.id}>
            <img src={r.imageUrl} width="100%" />
            <h3>{r.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}