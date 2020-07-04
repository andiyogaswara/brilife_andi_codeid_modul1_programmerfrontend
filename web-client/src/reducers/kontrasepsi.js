import {
  FIND_KONTRASEPSI_REQUEST,
  FIND_KONTRASEPSI_SUCCESS,
  FIND_KONTRASEPSI_FAILURE,
  FIND_KONTRASEPSIS_REQUEST,
  FIND_KONTRASEPSIS_SUCCESS,
  FIND_KONTRASEPSIS_FAILURE,
  ADD_KONTRASEPSI_REQUEST,
  ADD_KONTRASEPSI_SUCCESS,
  ADD_KONTRASEPSI_FAILURE,
} from "../actions/constants";

const defaultState = { data: null, loading: false, error: null };

export function findKontrasepsiById(state = defaultState, action) {
  switch (action.type) {
    case FIND_KONTRASEPSI_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_KONTRASEPSI_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_KONTRASEPSI_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function addKontrasepsi(state = defaultState, action) {
  switch (action.type) {
    case ADD_KONTRASEPSI_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_KONTRASEPSI_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case ADD_KONTRASEPSI_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function findKontrasepsis(state = defaultState, action) {
  switch (action.type) {
    case FIND_KONTRASEPSIS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_KONTRASEPSIS_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_KONTRASEPSIS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
