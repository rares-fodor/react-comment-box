import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MAX_COMMENTS_DISPLAYED = 10;
const COMMENT_TEXTAREA_ROWS = 4;

// TODO: Interfete pentru DB

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [{
                author: null,
                content: null
            }],
        };
    }

    // Intoarce o lista cu obiecte Comment construite din this.state.comments
    getComments() {
        return this.state.comments.map((comm) => {
            return (<Comment author={comm.author} content={comm.content}/>);
        });
    }


    // Primeste continutul comentariului de la Form
    // citeste de la appwrite(?) username-ul, completeaza comentariul si il adauga
    // in this.state.comments
    newComment(content) {
        const comment = {
            author: "John Titor", // Placeholder
            content: content,
        };
        this.setState({
            comments: this.state.comments.concat([comment])
        });
    }

    render() {
        const greeter = "Comments";
        const comments = this.getComments();

        return (
            <div className="CommentComponent">
                <h2>{greeter}</h2>
                <Form newComment={(content) => this.newComment(content)}/>
                <div className="CommentBox">{comments}</div>
            </div>
        );
    }
}


class Form extends React.Component {
    // Trimite contentul din textarea inapoi in newComment (din CommentBox)
    handleClick(event) {
        this.props.newComment(this.content.value);
    }

    // Todo: Submit handler in loc de click
    render() {
        return (
            <form className="CommentForm">
            <div className="CommentFormField">
                <textarea 
                    placeholder=""
                    rows={COMMENT_TEXTAREA_ROWS}
                    ref={(content) => this.content = content}
                >
                </textarea>
                <div className="CommentFormActions">
                    <button type="button" onClick={(content) => this.handleClick()}>save</button>
                </div>
            </div>
            </form>
        )
    }
}

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <p className="comment-author">{this.props.author}</p>
                <p className="comment-content">{this.props.content}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <CommentBox/>,
    document.getElementById('root'),
);
