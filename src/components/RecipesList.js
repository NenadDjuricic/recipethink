import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class RecipesList extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.data === null || undefined ? 'We dont have that meal' : this.props.data.map((recipe) => {
            return (
              <div className="col-sm-3 mt-3" key={recipe.idMeal}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.strMeal}</h5>
                    <Link to={{
                      pathname: `/recipe/${recipe.idMeal}`,
                      state: { recipe: recipe.idMeal }
                    }} className="btn btn-primary">
                      Meal
                  </Link>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    );
  };
};
function mapStateToProps(state) {
  return {
    data: state.recipeList
  }
}


export default connect(mapStateToProps)(RecipesList);
