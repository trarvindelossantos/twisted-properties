import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
import { connect } from 'react-redux';
import Loader from './Loader';

class Container extends Component {
    render() {
        return this.props.logged_in ? (
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        ) : (
            <div>
                <br />
                <center>
                    <Loader
                        loading={!this.props.logged_in}
                        size={'fa-5x'}
                        message={'Logging In...'}
                    />
                </center>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        logged_in: state.login_reducer.logged_in,
    };
};

export default connect(
    mapStateToProps,
    null
)(Container);
