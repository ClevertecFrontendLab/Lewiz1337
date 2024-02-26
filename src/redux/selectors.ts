import { RootState } from './configure-store';

export const routerState = (state: RootState) => state.router;
export const loginState = (state: RootState) => state.login;
export const registrationState = (state: RootState) => state.registration;
export const checkEmailState = (state: RootState) => state.checkEmail;
export const confirmState = (state: RootState) => state.confirm;
export const changePasswordState = (state: RootState) => state.changePassword;
