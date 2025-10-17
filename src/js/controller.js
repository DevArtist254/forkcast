import { state, loadRecipe, loadQueryRecipes, loadSearchPages } from "./model";
import recipeView from "./views/recipeView";
import resultsView from "./views/resultsView";
import searchView from "./views/searchView";

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////
// Controller  

const ctrlRecipe = async () => {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSnipper()

    await loadRecipe(id);

    recipeView.render(state.recipe);

  } catch {
    recipeView.renderErrorMessage();
  }
}

const queryRecipes = async () => {
  try {
    resultsView.renderSnipper();

    const query = searchView.getQuery();

    await loadQueryRecipes(query);

    resultsView.render(loadSearchPages(3));
  } catch (err) {
    console.log(err);
  }
}

function init() {
  recipeView.addHandlerRender(ctrlRecipe);
  searchView.addSearchHandler(queryRecipes);
}
init()
console.log("Hello world");
