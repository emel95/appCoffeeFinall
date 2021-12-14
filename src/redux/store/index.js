import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {reducers} from '../reducers/index';
//import {getProducts} from './../actions/product';

export const store =createStore(reducers,compose(applyMiddleware(thunk)));

//* Store Dispatch bra zamani hast ke bekham vaghte user nist ke etelate render beshan hamon value avali 
//store.dispatch(getProducts());