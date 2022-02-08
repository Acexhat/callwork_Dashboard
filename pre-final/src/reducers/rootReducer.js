import { combineReducers } from "redux";
import DrawerReducer from './drawer/drawerReducer';
import FreedaDrawerReducer from './drawer/freedaDrawer';
import DummyData from './dummyData';
import SearchingReducer from './searchingReducer';
const rootReducer = combineReducers({
    DrawerReducer:DrawerReducer,
    FreedaDrawerReducer:FreedaDrawerReducer,
    DummyData:DummyData,
    SearchingReducer:SearchingReducer,
})

export default rootReducer;