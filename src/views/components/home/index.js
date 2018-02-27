import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as homeActions from '../../actions/home-actions';
import Search from '../shared/search/';

import './index.css';

class Home extends Component {
  componentDidMount() {
    const { fetchJobs } = this.props;
    fetchJobs();
  };

  render() {
    const { isFetching, error, jobs } = this.props;
    const { open, closed } = jobs;

    return (
      <div className='home outerContainer'>
        <div className='container'>
          <div className='home__search'>
            <Search />
          </div>
        </div>
        <div className='home__main'>
          <nav className='container'>
            <button className='home__subNav-link home__subNav-link--active'>
              open({open.length})
            </button>
            <button className='home__subNav-link'>
              closed({closed.length})
            </button>
          </nav>
          <div className='home__jobs'>
            { isFetching?
              <span>Loading.....</span>:
              error?
                <span className='home__errorMessage'>
                  {error}
                </span>
                :(
                  open.map(job => (
                    <div key={job.id} className='home__job'>
                      <div className='container'>
                        <Link to={`/job/${job.id}`}><h2>{job.jobTitle}</h2></Link>
                        <button>Close</button>
                        <p>{job.description}</p>
                      </div>
                    </div>
                  ))
                )
            }
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  jobs: PropTypes.object,
  fetchJobs: PropTypes.func,
  error: PropTypes.string,
  isFetching: PropTypes.bool
};
const mapStateToProps = state => {
  return {
    jobs: state.home.jobs,
    isFetching: state.home.isFetching,
    error: state.home.error
  };
};
export default connect(mapStateToProps, homeActions)(Home);
