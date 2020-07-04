import {
  FIND_PEMAKAI_KONTRASEPSI_REQUEST,
  FIND_PEMAKAI_KONTRASEPSI_SUCCESS,
  FIND_PEMAKAI_KONTRASEPSI_FAILURE,
  FIND_PEMAKAI_KONTRASEPSIS_REQUEST,
  FIND_PEMAKAI_KONTRASEPSIS_SUCCESS,
  FIND_PEMAKAI_KONTRASEPSIS_FAILURE,
  ADD_PEMAKAI_KONTRASEPSI_REQUEST,
  ADD_PEMAKAI_KONTRASEPSI_SUCCESS,
  ADD_PEMAKAI_KONTRASEPSI_FAILURE,
} from "../actions/constants";

const defaultState = { data: null, loading: false, error: null };

export function findPemakaiKontrasepsiById(state = defaultState, action) {
  switch (action.type) {
    case FIND_PEMAKAI_KONTRASEPSI_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PEMAKAI_KONTRASEPSI_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_PEMAKAI_KONTRASEPSI_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function findPemakaiKontrasepsis(state = [], action) {
  switch (action.type) {
    case FIND_PEMAKAI_KONTRASEPSIS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PEMAKAI_KONTRASEPSIS_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_PEMAKAI_KONTRASEPSIS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function addPemakaiKontrasepsi(state = defaultState, action) {
  switch (action.type) {
    case ADD_PEMAKAI_KONTRASEPSI_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_PEMAKAI_KONTRASEPSI_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case ADD_PEMAKAI_KONTRASEPSI_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
