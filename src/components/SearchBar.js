import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRecipes } from '../store/actions/index';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {

  render() {
    const searchRecipe = (recipeName, props) => {
      props.getRecipes(recipeName);
      props.history.push(`/searchpage/${recipeName}`);
    }

    return (
      <form className="d-flex mt-2 mt-sm-2 mt-md-auto mb-md-auto" onSubmit={e => {e.preventDefault(); searchRecipe(e.target.elements.recipeName.value, this.props);}} autoComplete="off">
        <input className="form-control me-2" type="text" id="inputText" name="recipeName" placeholder="Search" aria-label="Search" />
      </form>
    );
  }
};

function mapStateToProps(state) {
  return {
    data: state.recipeList
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({getRecipes: getRecipes}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(withRouter(SearchBar));

