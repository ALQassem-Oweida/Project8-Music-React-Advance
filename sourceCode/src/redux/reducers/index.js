import { combineReducers } from "redux";
import { songsReducer, selectedProductsReducer,setSearch ,postsReducer} from "./productsReducer";
const reducers = combineReducers({
  allsongs: songsReducer,
  search:setSearch,
  product: selectedProductsReducer,
  posts:postsReducer,
});
export default reducers;
