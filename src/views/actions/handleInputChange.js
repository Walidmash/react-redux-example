import { HANDLE_INPUT_CHANGE } from '../constants/actionTypes';

export const handleInputChange = ({ name, value }) => {
  return {
    type: HANDLE_INPUT_CHANGE,
    payload: { name, value }
  };
};
