import {
  CREATE_JOBS_START,
  CREATE_JOBS_FAIL,
  CREATE_JOBS_SUCCESS
} from '../constants/actionTypes';

const createJobsStart = () => {
  return {
    type: CREATE_JOBS_START
  };
};
const createJobsFail = error => {
  return {
    type: CREATE_JOBS_FAIL,
    payload: error
  };
};
const createJobsSuccess = jobs => {
  return {
    type: CREATE_JOBS_SUCCESS,
    payload: jobs
  };
};
export const createNewJobs = data => dispatch => {
  console.log('data', data);
  dispatch(createJobsStart());
  fetch('/api/v1/jobs', {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(jobs => dispatch(createJobsSuccess(jobs)))
    .catch(err => dispatch(createJobsFail(err.message)));
};
