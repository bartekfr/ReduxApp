import React, { Component} from 'react';
import {connect} from 'react-redux';
import {add} from '../actions';
import { hashHistory } from 'react-router'

/* form fields editing by-passess redux so that store is not modified until form is submitted (via redux action)
*/
class AddVideo extends Component {
	setFormData() {
		if (this.props.editMode && this.props.video.size) {
			this.video = this.props.video.toJS()[0];
			this.refs.title.value = this.video.title;
			this.refs.img.value = this.video.img;
		}
	}
	componentDidMount() {
		this.setFormData();
	}
	componentDidUpdate() {
		this.setFormData();
	}
	validate() {
		var form = this.refs.form;
		var title = this.refs.title;

		form.classList.remove('error');
		this.error = false;

		if (title.value === '') {
			form.classList.add('error');
			this.error = true;
			return;
		}
	}
	submit(e) {
		e.preventDefault();
		this.validate();
		if (this.error) {
			return false;
		}

		this.props.update({title: this.refs.title.value, img: this.refs.img.value});
		hashHistory.push('/');
	}
	remove(e) {
		e.preventDefault();
		hashHistory.push('/');
		this.props.remove(this.video.id);
	}
	render() {
		if (this.props.editMode) {
			this.removeBtn = (<a className="button alert" href="#" onClick={this.remove.bind(this)}>Remove</a>);
		}
		return (
			<div>
				<h2>{this.props.title || 'Add new video'}</h2>
				<form onSubmit={this.submit.bind(this)} ref="form">
					<div className="row">
						<input className="medium-6 columns" ref='title' />
					</div>
					<div className="row">
						<input className="medium-6 columns" ref='img' />
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