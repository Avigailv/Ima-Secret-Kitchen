const BASE_URL = import.meta.env.VITE_API_URL;

export const getRecipes = async (category?: string) => {
  const url = category
    ? `${BASE_URL}/recipes?category=${category}`
    : `${BASE_URL}/recipes`;

  const res = await fetch(url);
  if (!res.ok) {
  throw new Error("API error");
}
  return res.json();
};

// export const getRecipeById = async (id: string) => {
//   const res = await fetch(`${BASE_URL}/recipes/${id}`);
//   return res.json();
// };

export const getRecipeById = async (id: string) => {
  const response = await fetch(
    `https://ima-secret-kitchen.onrender.com/recipes/${id}`
  );

  return response.json();
};