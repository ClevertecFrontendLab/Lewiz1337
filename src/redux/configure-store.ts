import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import createSagaMiddleware from 'redux-saga';
import loginSlice from './slices/auth/login-slice';
import { rootWatcher } from './saga/root';
import registrationSlice from './slices/registration/registration-slice';
import checkEmailSlice from './slices/check-email/check-email-slice';
import confirmSlice from './slices/confirm/confirm-slice';
import changePasswordSlice from './slices/change-password/change-password-slice';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
    savePreviousLocations: 1,
});
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: combineReducers({
        router: routerReducer,
        login: loginSlice,
        registration: registrationSlice,
        checkEmail: checkEmailSlice,
        confirm: confirmSlice,
        changePassword: changePasswordSlice,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(routerMiddleware, sagaMiddleware),
});
sagaMiddleware.run(rootWatcher);
export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
