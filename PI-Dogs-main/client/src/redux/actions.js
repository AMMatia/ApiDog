import {
  CHANGE_PAGE,
  GET_DOGS,
  BY_NAME,
  BY_ID,
  FILTER_TEMP,
  FILTER_ORIGIN,
  GET_TEMPS,
  SORT_DOGS,
  CREATE_DOG,
} from "./type";
import axios from "axios";

const getDogs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/dogs");
      return dispatch({
        type: GET_DOGS,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

const changePage = (page) => {
  return {
    type: CHANGE_PAGE,
    payload: page,
  };
};

const byName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/dogs/name?name=${name}`
      );
        return dispatch({
          type: BY_NAME,
          payload: data,
        });
      
    } catch (error) {
      window.alert(error.message);
    }
  };
};

const byId = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/dogs/${id}`);
      return dispatch({
        type: BY_ID,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

const getTemps = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "http://localhost:3001/dogs/temperaments"
      );
      return dispatch({
        type: GET_TEMPS,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

const filterTemp = (dogsFiltered) => {
  return {
    type: FILTER_TEMP,
    payload: dogsFiltered,
  };
};
const filterOrigin = (dogsFiltered) =>{
  return{
    type:FILTER_ORIGIN,
    payload:dogsFiltered,
  }
}
const sortDogs = (updated) => {
  return {
    type: SORT_DOGS,
    payload: updated,
  };
};

const createDog = (newDog) => {
  const endpoint = `http://localhost:3001/dogs`;
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, newDog);
      return dispatch({
        type: CREATE_DOG,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};
export {
  getDogs,
  changePage,
  byName,
  byId,
  getTemps,
  filterTemp,
  filterOrigin,
  sortDogs,
  createDog,
};
