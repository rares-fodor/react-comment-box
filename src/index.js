import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MAX_COMMENTS_DISPLAYED = 10;
const COMMENT_TEXTAREA_ROWS = 4;


class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            userIsAdmin: true,
        };
    }

    updateDatabase() {}

    // Intoarce o lista cu obiecte Comment construite din this.state.comments
    getComments() {
        return this.state.comments.map((comm) => {
            return (
                <Comment
                    deleteComment={(id) => this.deleteComment(id)}
                    id={comm.id}
                    author={comm.author}
                    content={comm.content}
                    renderDeleteButton={this.state.userIsAdmin}
                    key={comm.id}
                />);
        });
    }

    getUsername() {}

    // Primeste continutul comentariului de la Form
    // citeste de la appwrite(?) username-ul, completeaza comentariul si il adauga
    // in this.state.comments
    newComment(content) {
        const comment = {
            author: "John Titor", // Placeholder
            content: content,
            id: Date.now(), // Maybe change to UUID
        };
        this.setState({
            comments: [comment].concat(this.state.comments)
        });
        // TODO Update DB
    }

    // Primeste id-ul comentariului care trebuie sters
    // apelata din Comment
    deleteComment(id) {
        this.setState({
            comments: this.state.comments.filter(elem => elem.id != id)
        });
        // TODO Update DB
    }

    render() {
        const greeter = "Comments";
        const comments = this.getComments();

        // TODO Test if user has permissions to del comments -> update userIsAdmin

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

    // TODO: Submit handler in loc de click
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
                    <button type="button" onClick={() => this.handleClick()}>save</button>
                </div>
            </div>
            </form>
        )
    }
}

class Comment extends React.Component {
    handleClick() {
        this.props.deleteComment(this.props.id); 
    }

    render() {
        const deleteButton = 
            this.props.renderDeleteButton ? 
            <button type="button" onClick={() => this.handleClick()}>del</button> :
            <br/>;

        return (
            <div className="comment">
                <p className="comment-author">{this.props.author}</p>
                <p className="comment-content">{this.props.content}</p>
                {deleteButton}
            </div>
        )
    }
}

ReactDOM.render(
    <CommentBox/>,
    document.getElementById('root'),
);
