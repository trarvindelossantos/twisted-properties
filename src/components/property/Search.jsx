import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
    searchProperty,
    searchClear,
    setAddress,
} from '../../app/actions/search';
import { fetchProperty } from '../../app/actions/property';
import Loader from '.././Loader';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            loading: false,
            searchMinLenght: 3,
        };
    }

    //load suggestions
    suggestions = () => {
        return (
            <div
                className="list-group"
                style={{ zIndex: 999, position: 'absolute', width: '97%' }}
            >
                {this.props.suggestions.map(suggestion => {
                    return (
                        <NavLink
                            to={`/property/${suggestion.propertyId}?address=${
                                suggestion.suggestion
                            }`}
                            onClick={() =>
                                this.searchNew(suggestion.propertyId)
                            }
                            key={suggestion.propertyId}
                            className="list-group-item list-group-item-action"
                        >
                            {suggestion.suggestion}
                        </NavLink>
                    );
                })}
            </div>
        );
    };

    onSearch = event => {
        if (event.target.value.length >= this.state.searchMinLenght) {
            this.setState({
                search: event.target.value,
                loading: true,
            });
            this.props.searchProperty(event.target.value);
        } else {
            this.props.searchClear();
            this.setState({
                loading: false,
            });
        }
    };

    //handles new search
    searchNew = id => {
        //this.props.setAddress(address);
        this.props.fetchProperty(id);

        this.props.searchClear();
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-2" />
                <div className="col-md-8">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your Property Address or Street Name"
                        name="search"
                        autoComplete={'off'}
                        onChange={this.onSearch}
                    />
                    <center>
                        <Loader loading={this.props.searching} />
                    </center>

                    {this.props.hasSuggestion && this.suggestions()}
                </div>
                <div className="col-md-2" />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searching: state.search_reducer.searching,
        hasSuggestion: state.search_reducer.hasSuggestion,
        suggestions: state.search_reducer.suggestions,
        error: state.search_reducer.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        searchProperty: query => {
            dispatch(searchProperty(query));
        },
        searchClear: () => {
            dispatch(searchClear());
        },
        fetchProperty: id => {
            dispatch(fetchProperty(id));
        },
        setAdress: address => {
            dispatch(setAddress(address));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
