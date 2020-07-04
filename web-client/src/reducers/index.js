import { combineReducers } from "redux";
import {
  findKontrasepsiById,
  findKontrasepsis,
  addKontrasepsi,
} from "./kontrasepsi";
import { findPropinsiById, findPropinsis, addPropinsi } from "./propinsi";
import {
  findPemakaiKontrasepsiById,
  findPemakaiKontrasepsis,
  addPemakaiKontrasepsi,
} from "./pemakaiKontrasepsi";

export default combineReducers({
  findKontrasepsiById,
  findKontrasepsis,
  addKontrasepsi,
  findPropinsiById,
  findPropinsis,
  addPropinsi,
  findPemakaiKontrasepsiById,
  findPemakaiKontrasepsis,
  addPemakaiKontrasepsi,
});
