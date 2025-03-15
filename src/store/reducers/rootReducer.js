import appReducer from "./appReducer";
import { combineReducers } from "redux";
import {persistReducer} from "redux-persist"
import musicReducer from "./music";
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/hardSet'
const commontConfig={
    storage:storage,
    stateReconciler: autoMergeLevel2
}
const musicConfig ={
    ...commontConfig,
    key:"music",
    whiteList:["curSongId"]
}
const rootReducer =combineReducers({
    app:appReducer,
    music:persistReducer(musicConfig,musicReducer)
})
export default rootReducer;