import {
  FETCH_JOBS_START,
  FETCH_JOBS_FAIL,
  FETCH_JOBS_SUCCESS
} from '../constants/actionTypes';

const fetchJobsStart = () => {
  return {
    type: FETCH_JOBS_START
  };
};
const fetchJobsFail = error => {
  return {
    type: FETCH_JOBS_FAIL,
    payload: error
  };
};
const fetchJobsSuccess = jobs => {
  return {
    type: FETCH_JOBS_SUCCESS,
    payload: jobs
  };
};
export const fetchJobs = () => dispatch => {
  dispatch(fetchJobsStart());
  fetch('/api/v1/jobs')
    .then(res => res.json())
    .then(jobs => dispatch(fetchJobsSuccess(jobs)))
    .catch(err => dispatch(fetchJobsFail(err.message)));
};
