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
} from "./constants";

import { comAxios } from "../utils/apiUtils";

function sleep(delay, value) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay, value);
  });
}

export const findById = (id) => (dispatch) => {
  dispatch({
    type: FIND_PEMAKAI_KONTRASEPSI_REQUEST,
  });

  comAxios
    .get(`pemakaiKontrasepsi/${id}`)
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(findPemakaiKontrasepsiSuccess(data));
    })
    .catch((error) => {
      dispatch(findPemakaiKontrasepsiFailure(error));
    });
};

export const findAll = () => (dispatch) => {
  dispatch({
    type: FIND_PEMAKAI_KONTRASEPSIS_REQUEST,
  });

  comAxios
    .get("pemakaiKontrasepsi")
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(findPemakaiKontrasepsisSuccess(data));
    })
    .catch((error) => {
      dispatch(findPemakaiKontrasepsisFailure(error));
    });
};

export const addPemakaiKontrasepsi = ({
  Id_List,
  Id_Propinsi,
  Id_Kontrasepsi,
  Jumlah_Pemakai,
}) => (dispatch) => {
  dispatch({
    type: ADD_PEMAKAI_KONTRASEPSI_REQUEST,
  });
  const request = comAxios.post("pemakaiKontrasepsi", {
    Id_Propinsi: Id_Propinsi,
    Id_Kontrasepsi: Id_Kontrasepsi,
    Jumlah_Pemakai: Jumlah_Pemakai,
  });

  request
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(addPemakaiKontrasepsiSuccess(data));
    })
    .catch((error) => {
      dispatch(addPemakaiKontrasepsiFailure(error));
    });
};

function findPemakaiKontrasepsiSuccess(data) {
  return {
    type: FIND_PEMAKAI_KONTRASEPSI_SUCCESS,
    data: data,
  };
}

function findPemakaiKontrasepsiFailure(error) {
  return {
    type: FIND_PEMAKAI_KONTRASEPSI_FAILURE,
    error: error,
  };
}
function findPemakaiKontrasepsisSuccess(data) {
  return {
    type: FIND_PEMAKAI_KONTRASEPSIS_SUCCESS,
    data: data,
  };
}

function findPemakaiKontrasepsisFailure(error) {
  return {
    type: FIND_PEMAKAI_KONTRASEPSIS_FAILURE,
    error: error,
  };
}

function addPemakaiKontrasepsiSuccess(data) {
  return {
    type: ADD_PEMAKAI_KONTRASEPSI_SUCCESS,
    data: data,
  };
}

function addPemakaiKontrasepsiFailure(error) {
  return {
    type: ADD_PEMAKAI_KONTRASEPSI_FAILURE,
    error: error,
  };
}
