import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleInputChange } from '../../actions/handleInputChange';
import { createNewJobs } from '../../actions/createNewjob-actions';

class CreateJobForm extends Component {
  constructor() {
    super();
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInputChange(ev) {
    const data = { name: ev.target.name, value: ev.target.value };
    this.props.handleInputChange(data);
  }

  _handleSubmit(ev) {
    ev.preventDefault();
    const {
      jobTitle,
      jobArea,
      category,
      type,
      description,
      image,
      status
    } = this.props;

    const data = {
      jobTitle,
      jobArea,
      category,
      type,
      description,
      image,
      status
    };

    this.props.createNewJobs(data);
  }

  render() {
    const { _handleInputChange, _handleSubmit } = this;

    const {
      jobTitle,
      jobArea,
      category,
      type,
      description,
      image,
      status
    } =this.props;

    return (
      <form className='createJobForm'>
        <div className='createJobForm__field'>
          <label className='createJobForm__field-label'>job Title</label>
          <input
            className='createJobForm__field-input'
            value={jobTitle}
            type='text'
            name='jobTitle'
            onChange={_handleInputChange}
          />
        </div>
        <div className='createJobForm__field'>
          <label className='createJobForm__field-label'>job Area</label>
          <input
            className='createJobForm__field-input'
            value={jobArea}
            type='text'
            name='jobArea'
            onChange={_handleInputChange}
          />
        </div>
        <div className='createJobForm__field'>
          <label className='createJobForm__field-label'>category</label>
          <input
            className='createJobForm__field-input'
            value={category}
            type='text'
            name='category'
            onChange={_handleInputChange}
          />
        </div>
        <div className='createJobForm__field'>
          <label className='createJobForm__field-label'>type</label>
          <input
            className='createJobForm__field-input'
            value={type}
            type='text'
            name='type'
            onChange={_handleInputChange}
          />
        </div>
        <div className='createJobForm__field'>
          <label className='createJobForm__field-label'>description</label>
          <input
            className='createJobForm__field-input'
            value={description}
            type='text'
            name='description'
            onChange={_handleInputChange}
          />
        </div>
        <div className='createJobForm__field'>
          <label className='createJobForm__field-label'>image link</label>
          <input
            className='createJobForm__field-input'
            value={image}
            type='text'
            name='image'
            onChange={_handleInputChange}
          />
        </div>
        <div className='createJobForm__field'>
          <label className='createJobForm__field-label'>status</label>
          <input
            className='createJobForm__field-input'
            value={status}
            type='text'
            name='status'
            onChange={_handleInputChange}
          />
        </div>
        <button className='createJobForm__btn' onClick={_handleSubmit}>submit</button>
      </form>
    );
  }
};

CreateJobForm.propTypes = {
  handleInputChange: PropTypes.func,
  createNewJobs: PropTypes.func,
  jobTitle: PropTypes.string,
  jobArea: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string
};

const mapStateToProps = ({ createJobForm }) => {
  const {
    jobTitle,
    jobArea,
    category,
    type,
    description,
    image,
    status
  } = createJobForm;

  return {
    jobTitle,
    jobArea,
    category,
    type,
    description,
    image,
    status
  };
};

const mapDispatchToProps = {
  handleInputChange,
  createNewJobs
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateJobForm);
