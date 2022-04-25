import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MAX_COMMENTS_DISPLAYED = 10;

class CommentBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	/* 
	 * Read comments from database into comments[]
	 **/
	getComments() {}

    /*
	 * Add a new comment. If limit reached, push oldest comment out,
	 * put new comment on top. OUTPUT DATABASE INTERFACE
	 **/
	newComment() {}


	render() {
		return (
			// TODO: one div for each reply
			<div className="CommentBox">
			<div className="Reply">
			</div>
			</div>
		);
	}
}

ReactDOM.render(
	<CommentBox/>,
	document.getElementById('root'),
);
