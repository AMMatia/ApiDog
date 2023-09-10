import {
  CHANGE_PAGE,
  GET_DOGS,
  BY_NAME,
  BY_ID,
  GET_TEMPS,
  FILTER,
  SORT_DOGS,
  CREATE_DOG,
} from "./type";

const initialState = {
  dogs: [],
  currentPage: 1,
  details: [],
  temps: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_DOGS:
      return { ...state, dogs: payload };

    case CHANGE_PAGE:
      return { ...state, currentPage: payload };

    case BY_NAME:
      return { ...state, dogs: payload };

    case BY_ID:
      return { ...state, details: payload };

    case GET_TEMPS:
      return { ...state, temps: payload };

    case FILTER:
      return { ...state, dogs: payload };

    case SORT_DOGS:
      return { ...state, dogs: payload };

    case CREATE_DOG:
      return { ...state, dogs: payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
