module.exports = `import { phCap_GET_ALL_REQUEST, phCap_GET_ALL_FAILURE, phCap_GET_ALL_SUCCESS } from "./types";
import Middleware from "Store/Middleware";

const middleware = new Middleware();

export function sholderRequest() {
    return {
        type: phCap_GET_ALL_REQUEST,
        loading: true,
        loaded: false,
        error: false,
        success: false
    };
}

export function sholderSuccess(data: any) {
    return {
        type: phCap_GET_ALL_SUCCESS,
        loading: false,
        loaded: true,
        error: false,
        success: true,
        sholder: data
    };
}

export function sholderFailure(error: any) {
    return {
        type: phCap_GET_ALL_FAILURE,
        loading: false,
        loaded: true,
        error: true,
        errorResp: error,
        success: false
    };
}

export function serviceplaceholderRS(url: string, method: string, reqObj?: any) {

    return (dispatch: any) => {
        dispatch(sholderRequest());
        return middleware.service(url, method, reqObj)
            .then((response: any) => {
               dispatch(sholderSuccess(response));
            }).catch((error: any) => {
               dispatch(sholderFailure(error));
            })
    }
}
`
