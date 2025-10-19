import { state, loadRecipe, loadSearchPages, loadQueryRecipes } from "./model";
import paginationView from "./views/paginationView";
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

    resultsView.render(loadSearchPages(4));

    paginationView.render(state.search);
  } catch (err) {
    console.log(err);
  }
}

const ctrlPages = (clickedEl) => {
  const pageNum = paginationView.getNewPageNumber(clickedEl);

  state.search.page = pageNum;

  resultsView.render(loadSearchPages(state.search.page));

  paginationView.render(state.search);  
}

function init() {
  recipeView.addHandlerRender(ctrlRecipe);
  searchView.addSearchHandler(queryRecipes);
  paginationView.addButtonHandler(ctrlPages);
}
init()
