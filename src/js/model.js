export const state = {
  recipe: {}
};

export const loadRecipe = async (id) => {
  try {
    const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}?key=c50896c6-55df-40cb-b60f-93509e64dc33`);
    const data = await res.json();

    const { ...receivedRecipe } = data.data.recipe;

    const recipe = {
      publisher: receivedRecipe.publisher,
      ingredients: receivedRecipe.ingredients,
      sourceUrl: receivedRecipe.source_url,
      imageUrl: receivedRecipe.image_url,
      title: receivedRecipe.title,
      servings: receivedRecipe.servings,
      cookingTime: receivedRecipe.cooking_time
    }

    state.recipe = recipe;
  } catch {
    alert('Error');
  }
}
