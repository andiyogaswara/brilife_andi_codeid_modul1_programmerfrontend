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
} from "./constants";
import { comAxios } from "../utils/apiUtils";

function sleep(delay, value) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay, value);
  });
}

export const findById = (id) => (dispatch) => {
  dispatch({
    type: FIND_KONTRASEPSI_REQUEST,
  });

  comAxios
    .get(`kontrasepsi/${id}`)
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(findKontrasepsiSuccess(data));
    })
    .catch((error) => {
      dispatch(findKontrasepsiFailure(error));
    });
};

export const findAll = () => (dispatch) => {
  dispatch({
    type: FIND_KONTRASEPSIS_REQUEST,
  });

  comAxios
    .get("kontrasepsi")
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(findKontrasepsisSuccess(data));
    })
    .catch((error) => {
      dispatch(findKontrasepsisFailure(error));
    });
};

export const addKontrasepsi = ({ Id_Kontrasepsi, Nama_Kontrasepsi }) => (
  dispatch
) => {
  dispatch({
    type: ADD_KONTRASEPSI_REQUEST,
  });
  const request = Id_Kontrasepsi;
  comAxios.post("kontrasepsi", { Nama_Kontrasepsi });

  request
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(addKontrasepsiSuccess(data));
    })
    .catch((error) => {
      dispatch(addKontrasepsiFailure(error));
    });
};

function findKontrasepsiSuccess(data) {
  return {
    type: FIND_KONTRASEPSI_SUCCESS,
    data: data,
  };
}

function findKontrasepsiFailure(error) {
  return {
    type: FIND_KONTRASEPSI_FAILURE,
    error: error,
  };
}
function findKontrasepsisSuccess(data) {
  return {
    type: FIND_KONTRASEPSIS_SUCCESS,
    data: data,
  };
}

function findKontrasepsisFailure(error) {
  return {
    type: FIND_KONTRASEPSIS_FAILURE,
    error: error,
  };
}

function addKontrasepsiSuccess(data) {
  return {
    type: ADD_KONTRASEPSI_SUCCESS,
    data: data,
  };
}

function addKontrasepsiFailure(error) {
  return {
    type: ADD_KONTRASEPSI_FAILURE,
    error: error,
  };
}
