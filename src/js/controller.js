const recipeContainer = document.querySelector('.recipe');

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

const createRecipe = async () => {
  try {
      "https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886?key=c50896c6-55df-40cb-b60f-93509e64dc33"
  } catch {

  }
}
