import React, { Component } from 'react';
import { connect } from 'react-redux'
import CatTable from '../components/CatTable/CatTable'
 
class TableContainer extends Component {
    render() { 
        return (
            <div className='TableContainer'>
                <CatTable cats={this.props.cats}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cats: state.cats
    }
}

export default connect(mapStateToProps)(TableContainer);