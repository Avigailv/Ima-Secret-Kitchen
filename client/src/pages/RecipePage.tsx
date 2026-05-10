import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../services/recipesService";

type Recipe = {
  id: number;
  title: string;
  imageUrl: string;
  ingredients: string;
  instructions: string;
};

export default function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecipe = async () => {
      try {
        if (!id) return;

        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (err) {
        console.error("Error loading recipe:", err);
      } finally {
        setLoading(false);
      }
    };

    loadRecipe();
  }, [id]);

  if (loading) return <p>טוען...</p>;
  if (!recipe) return <p>מתכון לא נמצא</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>

      <img
        src={recipe.imageUrl}
        width="300"
        alt={recipe.title}
      />

      <h3>רכיבים</h3>
      <p>{recipe.ingredients}</p>

      <h3>הוראות</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}