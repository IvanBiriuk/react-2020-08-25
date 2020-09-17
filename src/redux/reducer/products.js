// import { normalizedProducts } from '../../fixtures';
// import { arrToMap } from '../utils';

// // { [productId]: product }
// export default (state = arrToMap(normalizedProducts), action) => {
//   const { type } = action;

//   switch (type) {
//     default:
//       return state;
//   }
// };

import produce from 'immer';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        entities: arrToMap(response),
        loading: false,
        loaded: true,
      };

    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };

    default:
      return state;
  }
};
