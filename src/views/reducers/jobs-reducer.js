import {
  FETCH_JOBS_START,
  FETCH_JOBS_FAIL,
  FETCH_JOBS_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  jobs: {
    open: [],
    closed: []
  },
  isFetching: false,
  error: undefined
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case FETCH_JOBS_FAIL: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    }
    case FETCH_JOBS_SUCCESS: {
      const newClosed = [];
      const newOpen = [];
      const jobs = action.payload;
      Object.values(jobs).forEach(job => {
        if (job.status === 'open') newOpen.push(job);
        else newClosed.push(job);
      });

      return {
        ...state,
        isFetching: false,
        error: undefined,
        jobs: {
          closed: newClosed,
          open: newOpen
        }
      };
    }
    default:
      return state;
  }
};

export default home;
