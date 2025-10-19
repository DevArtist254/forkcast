import { API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: 10,
  }
};

export const loadRecipe = async (id) => {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
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
  } catch (err) {
    throw err;
  }
}

export const loadQueryRecipes = async (query) => {
  try {
    const data = await getJSON(`${API_URL}?search=${query}`);
 
    state.search.results = data.data.recipes.map(receivedRecipes => { 
    return {
      publisher: receivedRecipes.publisher,
      imageUrl: receivedRecipes.image_url,
      title: receivedRecipes.title,
      id: receivedRecipes.id
      }
    });
  } catch(err) {
    console.log(err);
  }
}

export const loadSearchPages = function(page = state.search.page) {
  state.search.page = page;
  
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end)
};
