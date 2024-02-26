import { createSlice } from '@reduxjs/toolkit';

interface IRegistrationSlice {
    formValue?: LoginFormValue;
    status: StatusType;
    errorResponce?: RejectResponce;
}

export type RegistrationResponce = SuccessResponce | RejectResponce;

type SuccessResponce = object;


const initialState: IRegistrationSlice = {
    status: 'default',
};

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setStatus: (state, action: ActionType<StatusType>) => {
            state.status = action.payload;
        },
        setValue: (state, action: ActionType<LoginFormValue>) => {
            state.formValue = action.payload;
        },
        setErrorResponce: (state, action: ActionType<RejectResponce>) => {
            state.errorResponce = action.payload;
        },
        clear: (state) => {
            state.status = 'default';
            state.formValue = undefined;
            state.errorResponce = undefined;
        },
    },
});

export default registrationSlice.reducer;
export const { setStatus, setValue, clear, setErrorResponce } = registrationSlice.actions;
