import {combineReducers} from 'redux';
import {productReducer} from './productReducers';
import { usersReducer } from './usersReducers';


export const reducers = combineReducers({
  products  :productReducer,
   user :usersReducer,

   
});