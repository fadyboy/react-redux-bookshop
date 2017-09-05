import React from 'react';
import {connect} from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component {

    constructor(props){
        super(props);
    }

    submitBook(input){
        this.props.createBook(input);
    }

    render() {

        let titleInput;

        return (
            <div>
                <h3>Books</h3>
                <ul>
                    {/* traverse the books array */}
                    {this.props.books.map((b, i) => <li key={i}>{b.title}</li>)}
                </ul>
                <div>
                    <form onSubmit={e => {
                        e.preventDefault();
                        // assemble inputs
                        let input = {title: titleInput.value};
                        // call handler 
                        this.submitBook(input);
                        // reset form
                        e.reset();
                        }}>

                        <input type="text" name="title" ref={node => titleInput = node} />
                        <button type="submit">Submit</button>

                    </form>
                </div>
            </div>
        );
    }
}

// Maps actions to props
const mapStateToProps = (state) => {
    // this.props.books can now be accessed
    return {
        books: state.books
    };
};

// Map actions to props
const matchDispatchToProps = (dispatch) =>{
    return {
        // this.props.createBook can now be accessed
        createBook: book => dispatch(bookActions.createBook(book))
    };
};

// use connect to put them together
export default connect(mapStateToProps, matchDispatchToProps)(Book);