import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchProperty } from '../app/actions/property';

import PropertyDetails from '../components/property/PropertyDetails';
import { Navbar } from '../components/layouts/Navbar';
import Loader from '../components/Loader';

class PropertyView extends Component {
    constructor() {
        super();
        this.state = {
            currentImage: 0,
            propertyPhotos: [],
        };
    }

    openLightbox = object => {
        this.setState({
            currentImage: object.index,
            lightboxIsOpen: true,
        });
    };

    closeLightbox = () => {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    };

    gotoPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    };
    gotoNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchProperty(id);
    }

    //format photos into array
    setPhotos = photos => {
        let list = [];
        _.forEach(photos, n => {
            list.push({
                src: n.mediumPhotoUrl,
                width: 3,
                height: 2,
            });
        });

        return list;
    };

    setPhotosLarge = photos => {
        let list = [];
        _.forEach(photos, n => {
            list.push({
                src: n.largePhotoUrl,
            });
        });

        return list;
    };

    //dynamic column count for gallery
    columns = containerWidth => {
        let columns = 1;
        if (containerWidth >= 500) columns = 2;
        if (containerWidth >= 900) columns = 3;
        if (containerWidth >= 1500) columns = 4;
        return columns;
    };

    render() {
        return (
            <div>
                <Navbar />
                <br />
                <main className="container-fluid">
                    {!this.props.fetching ? (
                        <div>
                            <PropertyDetails
                                attributes={this.props.property.attributes}
                                propertyType={
                                    this.props.property.propertySubType
                                }
                                occupancyType={
                                    this.props.property.occupancyType
                                }
                                ///galllery
                                photos={this.setPhotos(this.props.photos.list)}
                                column={() => this.columns}
                                openLightbox={this.openLightbox}
                                //lightbox
                                photosLarge={this.setPhotosLarge(
                                    this.props.photos.list
                                )}
                                closeLightbox={this.closeLightbox}
                                gotoPrevious={this.gotoPrevious}
                                gotoNext={this.gotoNext}
                                currentImage={this.state.currentImage}
                                lightboxIsOpen={this.state.lightboxIsOpen}
                            />
                        </div>
                    ) : (
                        <center>
                            <Loader
                                loading={this.props.fetching}
                                message="Loading Property Details."
                            />
                        </center>
                    )}
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.property_reducer.fetching,
        property: state.property_reducer.property,
        photos: state.property_reducer.photos,
    };
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
