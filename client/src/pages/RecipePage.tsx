// import { useParams } from "react-router-dom";

// export default function RecipePage() {
//   const { id } = useParams();

//   return (
//     <div>
//       <h1>מתכון מספר {id}</h1>

//       <img src="https://via.placeholder.com/300" />

//       <h3>רכיבים</h3>
//       <ul>
//         <li>קמח</li>
//         <li>סוכר</li>
//         <li>שוקולד</li>
//       </ul>

//       <h3>הוראות הכנה</h3>
//       <p>מערבבים הכל ואופים 30 דקות.</p>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../services/recipesService";

export default function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getRecipeById(id).then(setRecipe);
    }
  }, [id]);

  if (!recipe) return <p>טוען...</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.imageUrl} width="300" />

      <h3>רכיבים</h3>
      <p>{recipe.ingredients}</p>

      <h3>הוראות</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}