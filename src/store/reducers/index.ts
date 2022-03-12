import {combineReducers} from 'redux';
import sermonReducers from './sermonReducer';

// export default combineReducers({
//   sermons: sermonReducers,
// });

export const rootReducer = combineReducers({
  sermons: sermonReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
