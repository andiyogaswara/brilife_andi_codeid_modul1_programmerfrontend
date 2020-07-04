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
} from "./constants";

import { comAxios } from "../utils/apiUtils";

function sleep(delay, value) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay, value);
  });
}

export const findById = (id) => (dispatch) => {
  dispatch({
    type: FIND_PROPINSI_REQUEST,
  });

  comAxios
    .get(`propinsi/${id}`)
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(findPropinsiSuccess(data));
    })
    .catch((error) => {
      dispatch(findPropinsiFailure(error));
    });
};

export const findAll = () => (dispatch) => {
  dispatch({
    type: FIND_PROPINSIS_REQUEST,
  });

  comAxios
    .get("propinsi")
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(findPropinsisSuccess(data));
    })
    .catch((error) => {
      dispatch(findPropinsisFailure(error));
    });
};

export const addPropinsi = ({ Id_Propinsi, Nama_Propinsi }) => (dispatch) => {
  dispatch({
    type: ADD_PROPINSI_REQUEST,
  });
  const request = comAxios.post("propinsi", { Id_Propinsi, Nama_Propinsi });

  request
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(addPropinsiSuccess(data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(addPropinsiFailure(error));
    });
};

function findPropinsiSuccess(data) {
  return {
    type: FIND_PROPINSI_SUCCESS,
    data: data,
  };
}

function findPropinsiFailure(error) {
  return {
    type: FIND_PROPINSI_FAILURE,
    error: error,
  };
}
function findPropinsisSuccess(data) {
  return {
    type: FIND_PROPINSIS_SUCCESS,
    data: data,
  };
}

function findPropinsisFailure(error) {
  return {
    type: FIND_PROPINSIS_FAILURE,
    error: error,
  };
}

function addPropinsiSuccess(data) {
  return {
    type: ADD_PROPINSI_SUCCESS,
    data: data,
  };
}

function addPropinsiFailure(error) {
  return {
    type: ADD_PROPINSI_FAILURE,
    error: error,
  };
}
