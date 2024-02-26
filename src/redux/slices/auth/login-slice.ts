import { createSlice } from '@reduxjs/toolkit';

interface ILoginSlice {
    formValue?: LoginFormValue;
    status: StatusType;
}

export type SuccessLoginResponce = {
    accessToken: 'string';
};

const initialState: ILoginSlice = {
    status: 'default',
    formValue: undefined,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setStatus: (state, action: ActionType<StatusType>) => {
            state.status = action.payload;
        },
        setValue: (state, action: ActionType<LoginFormValue>) => {
            state.formValue = action.payload;
        },
        clear: (state) => {
            state.status = 'default';
            state.formValue = undefined;
        },
    },
});

export default loginSlice.reducer;
export const { setStatus, setValue, clear } = loginSlice.actions;
