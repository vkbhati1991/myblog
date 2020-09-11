import { useEffect, useReducer } from "react";
// /import { getAuthrozitationHeader } from "../components/Authentication/index";
import axios from "axios";

const initialState = {
    loading: true,
    error: false,
    data: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                error: false,
                data: action.payload
            };
        case "FETCH_ERROR":
            return {
                loading: false,
                error: true,
                data: []
            };
        default:
            return state;
    }
};

function UseFetchData(url) {

    const [state, dispatch] = useReducer(reducer, initialState);
    //const token = getAuthrozitationHeader();

    /*eslint-disable */
    useEffect(() => {
        let isCancelled = false;
        axios.get(url)
            .then(function (response) {
                if (!isCancelled) {
                    dispatch({ type: "FETCH_SUCCESS", payload: response.data });
                }
            })
            .catch(function (error) {
                if (!isCancelled) {
                    dispatch({ type: "FETCH_ERROR", payload: {} });
                }
            });
        return () => isCancelled = true;
    }, [url]);



    return {
        loading: state.loading,
        data: state.data,
        error: state.error
    }

}

export { UseFetchData };