import { combineReducers } from "redux";
import { dataReducer } from "./App";
import { postReducer } from "./OrderDetails";
import { dataConstructor } from "./Constructor";
import { dataIngredientsReducer } from "./BurgerIngredient";
import { postForgotPasswordReducer } from "./ForgotPassword";
import { postResetPasswordReducer } from "./ResetPassword";
import { postRegister } from "./Register";
import { postLogin } from "./Login";
import { getUser } from "./ProfileUser";


export const rootReducer = combineReducers({
  dataReducer: dataReducer,
  postReducer: postReducer,
  dataConstructor: dataConstructor,
  dataIngredientsReducer: dataIngredientsReducer,
  postForgotPasswordReducer: postForgotPasswordReducer,
  postResetPasswordReducer: postResetPasswordReducer,
  postRegister: postRegister,
  postLogin: postLogin,
  getUser: getUser,
});