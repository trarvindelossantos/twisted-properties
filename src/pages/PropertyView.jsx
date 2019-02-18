import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperty } from '../app/actions/property';

import Property from '../components/property/Property';
import { Navbar } from '../components/layouts/Navbar';

class PropertyView extends Component {
    constructor() {
        super();
        this.state = {
            property: [],
            suggestion: [],
            loading: true,
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchProperty(id);
    }
    render() {
        return (
            <div>
                <Navbar />
                <br />
                <main className="container-fluid">
                    {!this.state.loading && (
                        <Property property={this.state.property} />
                    )}
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProperty: id => {
            dispatch(fetchProperty(id));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertyView);
