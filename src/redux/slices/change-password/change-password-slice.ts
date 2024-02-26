import { createSlice } from '@reduxjs/toolkit';

type changePasswordState = {
    status: StatusType;
    value?: ChangePasswordValue;
};

export type ChangePasswordValue = {
    password: string;
    confirmPassword: string;
};

export type ChangePasswordResponce = {
    message: string;
};

const initialState: changePasswordState = {
    status: 'default',
};

const changePasswordSlice = createSlice({
    name: 'change-password',
    initialState,
    reducers: {
        setStatus: (state, action: ActionType<StatusType>) => {
            state.status = action.payload;
        },
        setValue: (state, action: ActionType<ChangePasswordValue>) => {
            state.value = action.payload;
        },
        clear: (state) => {
            state.status = 'default';
            state.value = undefined;
        },
    },
});

export default changePasswordSlice.reducer;
export const { setStatus, setValue, clear } = changePasswordSlice.actions;
