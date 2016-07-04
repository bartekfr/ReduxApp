import React, { Component} from 'react';
import {connect} from 'react-redux';
import {add} from '../actions';
import { hashHistory } from 'react-router'
import shallowCompare from 'react-addons-shallow-compare';

/* 
	Editted form values are stored in componnet state until form is submitted - redux store is updated only when user submits form
*/
class AddVideo extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			img: '',
			error: false
		}
	}
	setFormData() {
		if (this.props.editMode && this.props.video.size && !this.dirty) {
			this.video = this.props.video.toJS()[0];
			this.setState({
				title: this.video.title,
				img: this.video.img
			});
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState);
	}
	componentDidMount() {
		this.setFormData();
	}
	componentDidUpdate() {
		this.setFormData();
	}
	validate() {
		var title = this.state.title;
		this.error = title === '' ? true : false;
		this.setState({error: this.error})
	}
	submit(e) {
		e.preventDefault();
		this.validate();
		if (this.error) {
			return false;
		}
		this.props.update({title: this.state.title, img: this.state.img});
		hashHistory.push('/');
	}
	remove(e) {
		e.preventDefault();
		hashHistory.push('/');
		this.props.remove(this.video.id);
	}
	updateField(field, e) {
		this.dirty = true;
		this.setState({
			[field]: e.target.value
		})
	}
	render() {
		if (this.props.editMode) {
			this.removeBtn = (<a className="button alert" href="#" onClick={this.remove.bind(this)}>Remove</a>);
		}
		return (
			<div>
				<h2>{this.props.title || 'Add new video'}</h2>
				<form onSubmit={this.submit.bind(this)} ref="form" className={this.state.error ? 'error' : ''}>
					<div className="row">
						<input type="text" className="medium-6 columns" value={this.state.title} onChange={this.updateField.bind(this, 'title')} />
					</div>
					<div className="row">
						<input type="text" className="medium-6 columns" value={this.state.img} onChange={this.updateField.bind(this, 'img')} />
					</div>
					<p className="error-msg">There are some error. Please correct them</p>
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

export default AddVideo;