import { combineReducers } from "redux";
import { dataReducer } from "./App";
import { postReducer } from "./OrderDetails";
import { dataConstructor } from "./Constructor";
import { dataIngredientsReducer } from "./BurgerIngredient";

export const rootReducer = combineReducers({
  dataReducer: dataReducer,
  postReducer: postReducer,
  dataConstructor: dataConstructor,
  dataIngredientsReducer: dataIngredientsReducer,
});




