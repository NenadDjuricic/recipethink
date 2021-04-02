import mealeapi from "../../apis/mealapi";



export const getRecipes = recipeName => {
  if (recipeName !== '') {
    return async (dispatch, getState) => {
      try {
        const response = await mealeapi.get(`/search.php?`, {
          params: {
            s: `${recipeName}`,
          },
        });
        const recipesData = response.data.meals;

        dispatch({
          type: "GET_RECIPES",
          payload: recipesData
        })
      } catch (error) {
        console.log(error.message);
      }
    }
  }
}