import {
  FIND_PROPINSI_REQUEST,
  FIND_PROPINSI_SUCCESS,
  FIND_PROPINSI_FAILURE,
  FIND_PROPINSIS_REQUEST,
  FIND_PROPINSIS_SUCCESS,
  FIND_PROPINSIS_FAILURE,
  ADD_PROPINSI_REQUEST,
  ADD_PROPINSI_SUCCESS,
  ADD_PROPINSI_FAILURE,
} from "../actions/constants";

const defaultState = { data: null, loading: false, error: null };

export function findPropinsiById(state = defaultState, action) {
  switch (action.type) {
    case FIND_PROPINSI_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PROPINSI_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_PROPINSI_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function findPropinsis(state = defaultState, action) {
  switch (action.type) {
    case FIND_PROPINSIS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PROPINSIS_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_PROPINSIS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function addPropinsi(state = defaultState, action) {
  switch (action.type) {
    case ADD_PROPINSI_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_PROPINSI_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case ADD_PROPINSI_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
