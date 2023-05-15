import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions';

const initialState = {
  isLoggedIn: false,
  error: null,
};

// eslint-disable-next-line default-param-last
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        error: action.payload.error,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        sLoggedIn: false,
        error: action.payload,
      };
      case LOGOUT:
        return {
          ...initialState,
        };
    default:
      return state;
  }
};

export default authReducer;
