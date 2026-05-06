const BASE_URL = "http://localhost:3000";

export const getRecipes = async (category?: string) => {
  const url = category
    ? `${BASE_URL}/recipes?category=${category}`
    : `${BASE_URL}/recipes`;

  const res = await fetch(url);
  return res.json();
};

export const getRecipeById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/recipes/${id}`);
  return res.json();
};