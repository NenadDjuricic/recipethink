import React from 'react'
import mealeapi from "../apis/mealapi";
import Header from '../components/Header'
class Recipe extends React.Component {
  state = {
    activeRecipe: ''
  }
  componentDidMount = () => {
    const id = this.props.location.state.recipe;
    const onSubmit = async () => {
      try {
        const response = await mealeapi.get(`/lookup.php?i=${id}`);
        const data = response.data.meals[0];
        this.setState({ activeRecipe: data });
      } catch(error) {
        alert(error.message)
      }
    }
    onSubmit();
  }
  render() {

    const recipe = this.state.activeRecipe;

    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="col-12 mt-3" >
            <div className="card mb-3" style={{ maxWidth: "100%", maxHeight: '100%' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="img-fluid d-block mt-5"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{recipe.strMeal}</h5>
                    <p className="card-text">{recipe.strInstructions}</p>
                    <p className='card-text'><span className='text-danger'>Ingredients: </span>{recipe.strIngredient1}, {recipe.strIngredient2}, {recipe.strIngredient3}, {recipe.strIngredient4}, {recipe.strIngredient5 ? recipe.strIngredient5 : null}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )

  }
}
export default Recipe;