import React, { Component } from 'react';
 
class SearchBar extends Component {
    
    state = {
        serial: ''
    }

    handleChange = event => {
        this.setState({
            serial: event.target.value 
        })
    }

    handleSubmit = event => {

    }
    
    render() { 
        return (
            <div>
                <input type='search' placeholder='Serial Number' value={this.state.serial} onChange={this.handleChange} />
                <input type='submit' onSubmit={this.handleSubmit} />
            </div>
        );
    }
}
 
export default SearchBar;