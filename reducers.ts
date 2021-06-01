module.exports = `import { ActionTypes, phCap_GET_ALL_REQUEST, phCap_GET_ALL_SUCCESS, phCap_GET_ALL_FAILURE, placeholderIState } from "./types";

const initialState: placeholderIState = {
    loading: false,
    loaded: false,
    error: false,
    success: false,
    errorResp: [],
    sholder: []
};
export function placeholderReducer(
    state = initialState,
    action: ActionTypes
): placeholderIState {
    switch (action.type) {
        case phCap_GET_ALL_REQUEST:
            return {
                ...state,
                loading: action.loading,
                loaded: action.loaded,
                error: action.error,
                errorResp: action.errorResp,
                success: action.success,
            }
        case phCap_GET_ALL_SUCCESS:
            return {
                loading: action.loading,
                loaded: action.loaded,
                error: action.error,
                errorResp: action.errorResp,
                success: action.success,
                sholder: action.sholder
            }
        case phCap_GET_ALL_FAILURE:
            return {
                ...state,
                loading: action.loading,
                loaded: action.loaded,
                error: action.error,
                errorResp: action.errorResp,
                success: action.success,
            }
        default:
            return state;
    }
}
`
