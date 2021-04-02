import React from 'react';
import RecipesList from '../components/RecipesList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRecipes } from '../store/actions/index';
import Header from '../components/Header';
import { withRouter } from 'react-router-dom';


class SearchPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header showSearch={'yes'} />
                <div className="container"><RecipesList data={this.data} /></div>
            </React.Fragment>
        )

    }
}
function mapStateToProps(state) {
    return {
        data: state.recipeList
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ getRecipes: getRecipes }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(withRouter(SearchPage));