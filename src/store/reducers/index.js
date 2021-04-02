import { combineReducers } from 'redux';
import ReducerRecipes from './ReducerRecipes';

const allReducers = combineReducers({
    recipeList: ReducerRecipes
});

export default allReducers;