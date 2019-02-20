import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar } from '../components/layouts/Navbar';
import { searchProperty, searchClear } from '../app/actions/search';
import Loader from '../components/Loader';
import ErrorComponent from '../components/errors/error';
import Search from '../components/property/Search';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            loading: false,
            searchMinLenght: 3,
        };
    }

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

    suggestions = () => {
        return (
            <div className="list-group">
                {this.props.suggestions.map(suggestion => {
                    return (
                        <NavLink
                            to={`/property/${suggestion.propertyId}`}
                            onClick={() => this.props.searchClear()}
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

    render() {
        return (
            <div>
                <Navbar />
                <br />
                <main className="container-fluid">
                    <div className="row">
                        <div className="col-md-2" />
                        <div className="col-md-8">
                            {this.props.error.flag && (
                                <ErrorComponent
                                    message={this.props.error.message}
                                />
                            )}
                            <h3>Search Property</h3>
                            <input
                                type="text"
                                className="form-control form-control-lg"
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
                </main>
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
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
