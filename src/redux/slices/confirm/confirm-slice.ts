import { createSlice } from '@reduxjs/toolkit';

type ConfirmSliceState = {
    status: StatusType;
    value?: RequestConfirmValue;
};

const initialState: ConfirmSliceState = {
    status: 'default',
};

export type ConfirmSuccessResponce = {
    email: string;
    message: string;
};

export type RequestConfirmValue = {
    email: string;
    code: string;
};

const confirmSlice = createSlice({
    name: 'confirm',
    initialState,
    reducers: {
        setStatus: (state, action: ActionType<StatusType>) => {
            state.status = action.payload;
        },

        setValue: (state, action: ActionType<RequestConfirmValue>) => {
            state.value = action.payload;
        },

        clear: (state) => {
            state.status = 'default';
            //state.errorResponce = undefined;
            state.value = undefined;
        },
    },
});

export default confirmSlice.reducer;
export const { setStatus, setValue, clear } = confirmSlice.actions;
