type ReactChild = JSX.Element | string | JSX.Element[];

type StatusType = 'loading' | 'success' | 'error' | 'default';

type ActionType<T> = {
    type: string;
    payload: T;
};

type RejectResponce = {
    statusCode: number;
    error: string;
    message: string;
};

type InputItemProps = {
    DataTestId?: string;
    name?: string;
};
