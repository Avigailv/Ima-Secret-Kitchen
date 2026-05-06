import { Link } from "react-router-dom";

type Recipe = {
  id: number;
  title: string;
  imageUrl: string;
};

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div style={{ border: "1px solid #ddd", padding: "10px" }}>
        <img src={recipe.imageUrl} width="100%" />
        <h3>{recipe.title}</h3>
      </div>
    </Link>
  );
}