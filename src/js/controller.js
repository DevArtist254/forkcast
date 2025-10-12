import { state, loadRecipe } from "./model";
import recipeView from "./views/recipeView";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
    alert("Error");
  }
}


['load', 'hashchange'].forEach(ev => window.addEventListener(ev, ctrlRecipe))
console.log("Hello world");
