import types from '../../constants';
import { fetchStatus } from "../../utils";

const initialState = {
    // homeView: [],
    // homeViewFetchStatus: fetchStatus.l,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.home.GET_HOME_VIEW:
            return {
                ...{
                    homeView: null,
                    homeViewFetchStatus: fetchStatus.l,
                },
                homeView: action.data,
                homeViewFetchStatus: action.fetchStatus
            }
        case types.home.GET_HOME_VIEW:
            return {
                ...{
                    pageInfo: null,
                    pageInfoFetchStatus: fetchStatus.l,
                },
                pageInfo: action.data,
                pageInfoFetchStatus: action.fetchStatus
            }
        default:
            return state;
    }
}
