module.exports = `export interface placeholderIState {
    loading: boolean,
    loaded: boolean,
    error: boolean,
    errorResp: any,
    success: boolean,
    sholder: any;
}

export const phCap_GET_ALL_REQUEST = "phCap_GET_ALL_REQUEST";
export const phCap_GET_ALL_SUCCESS = "phCap_GET_ALL_SUCCESS";
export const phCap_GET_ALL_FAILURE = "phCap_GET_ALL_FAILURE";

type actionType =  typeof phCap_GET_ALL_REQUEST
| typeof phCap_GET_ALL_SUCCESS
| typeof phCap_GET_ALL_FAILURE;

interface Action {
    type: actionType,   
    loading: boolean,
    loaded: boolean,
    error: boolean,
    errorResp: any,
    success: boolean,
    sholder: any;
}

export type ActionTypes = Action;
`
