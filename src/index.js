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

    getComments() {}
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
