import { combineReducers } from 'redux';
import home from './jobs-reducer';
import createJobForm from './create-new-job-form-reducer';

export default combineReducers({
  home,
  createJobForm
});
