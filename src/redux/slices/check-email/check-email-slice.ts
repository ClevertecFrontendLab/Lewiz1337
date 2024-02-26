import { createSlice } from '@reduxjs/toolkit';

type CheckEmailState = {
    status: StatusType;
    errorResponce?: RejectResponce;
};

const initialState: CheckEmailState = {
    status: 'default',
};

export type CheckEmailSuccessResponce = {
    email: string;
    message: string;
};

export type RequestCheckEmailValue = {
    email: string;
};

const checkEmailSlice = createSlice({
    name: 'checkEmail',
    initialState,
    reducers: {
        setStatus: (state, action: ActionType<StatusType>) => {
            state.status = action.payload;
        },
        setErrorResponce: (state, action: ActionType<RejectResponce>) => {
            state.errorResponce = action.payload;
        },
        clear: (state) => {
            state.status = 'default';
            state.errorResponce = undefined;
        },
    },
});

export default checkEmailSlice.reducer;
export const { setStatus, setErrorResponce, clear } = checkEmailSlice.actions;
