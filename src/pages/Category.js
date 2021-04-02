import React, { Component } from "react";
import mealeapi from "../apis/mealapi";
import { Link } from 'react-router-dom'
import Header from "../components/Header";
class Category extends Component {
  state = { activeCategory: [], value: '' };

  componentDidMount = () => {
    const category = this.props.location.state.category;
    const onMount = async () => {
      const response = await mealeapi.get(`/filter.php?c=${category}`);
      const data = response.data.meals;
      this.setState({ activeCategory: data })
    }
    onMount();
  }


  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='container'>
          <div className="col-12 col-sm-10 col-md-7 col-lg-3">
            <h5 className="mt-3">Filter desert by name:</h5>
            <div className="input-group mb-3 mt-4">
              <div className="input-group-prepend">
                <span className="input-group-text">Meal:</span>
              </div>
              <input
                type="text"
                value={this.state.value}
                className="form-control"
                aria-label="Default"
                onChange={e => this.setState({ value: e.target.value })}
              />
            </div>
          </div>
          <h3 className='text-center'><span className="text-black-50">Category: </span> {this.props.location.state.category}</h3>
          <div className='row'>
            {this.state.activeCategory
              .filter(item => {
                if (item.strMeal.toLowerCase().includes(this.state.value.toLowerCase())) {
                  return true;
                }
                return false;
              })
              .map(recipe => (
                <React.Fragment key={recipe.idMeal}>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-3 d-flex justify-content-center" >
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
                </React.Fragment>

              ))
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Category;
