import {
  HANDLE_INPUT_CHANGE
} from '../constants/actionTypes';

const initialState = {
  jobTitle: '',
  jobArea: '',
  category: '',
  type: '',
  description: '',
  image: '',
  status: ''
};

const home = (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDLE_INPUT_CHANGE: {
      return {
        ...state,
        [payload.name]: payload.value
      };
    }
    default:
      return state;
  }
};

export default home;
