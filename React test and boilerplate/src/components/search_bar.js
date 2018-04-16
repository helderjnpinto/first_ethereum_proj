import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {

           return (
            <div>   
                <input 
                value={ this.state.term }
                onChange={(e) => this.onInputChange(e.target.value) } />
                </div>
           ) 
    };

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
        console.log('​SearchBar -> onInputChange -> event', event.target.value);
        
    }
};

export default SearchBar;