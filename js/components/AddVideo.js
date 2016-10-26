import React, { Component} from 'react';
import {connect} from 'react-redux';
import {add} from '../actions';
import { hashHistory } from 'react-router'
import { Field, reduxForm } from 'redux-form/immutable';

const validate = values => {
	const errors = {};

	if (!values.get('title')) {
		errors.title = 'Title is required';
	}
	if (!values.get('img')) {
		errors.img = 'Image url is required';
	}
	if (!values.get('category')) {
		errors.category = 'Category is required';
	}
	return errors
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<div>
		<div>
			<input {...input} placeholder={label} type={type}/>
			{touched && error && <span className="error-msg">{error}</span>}
		</div>
	</div>
);

const renderFieldSelect = ({ input, categories, label, type, meta: { touched, error } }) => (
	<div>
		<div>
			<select {...input}>
				<option>Select category</option>
				{categories.toJS().map((category) => {
					return (
							<option key={category} value={category}>{category}</option>
						)
					})
				}
			</select>
			{touched && error && <span className="error-msg">{error}</span>}
		</div>
	</div>
);

class AddVideo extends Component {
	submit(data) {
		this.props.update({title: data.get('title'), img: data.get('img'), category: data.get('category')});
		hashHistory.push('/');
	}
	remove() {
		hashHistory.push('/');
		this.props.remove(this.props.id);
	}
	render() {
		if (this.props.editMode) {
			this.removeBtn = (<a className="button alert" href="#" onClick={this.remove.bind(this)}>Remove</a>);
		}
		return (
			<div>
				<h2>{this.props.title || 'Add new video'}</h2>
				<form onSubmit={this.props.handleSubmit(this.submit.bind(this))}>
					<div className="row">
						<Field name="title" component={renderField} type="text" label="Title"/>
					</div>
					<div className="row">
						<Field name="img" component={renderField} type="text" label="Image URL"/>
					</div>
					<div className="row">
						<Field name="category" component={renderFieldSelect} categories={this.props.categories} type="text" label="Category"/>
					</div>
					<p>
						<button ref="submit" className="button" type="submit">
							Submit
						</button>
						{this.removeBtn}
					</p>
				</form>
			</div>
		)
	}
}


AddVideo = reduxForm({
	form: 'videoForm',
	validate
})(AddVideo);

export default AddVideo;