import React from 'react';
import Gallery from 'react-photo-gallery';
import Search from './Search';

const PropertyDetails = ({
    propertyType,
    occupancyType,
    attributes,
    photos,
    column,
}) => {
    return (
        // attributes !== null && (
        <div>
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-10">
                    <div className="card mb-3">
                        <div className="card-body bg-dark">
                            <Search />
                        </div>
                        <div className="card-body bg-primary text-white">
                            <h3 className="card-title">
                                Property Type: {propertyType}
                            </h3>
                            <p className="card-text disabled">
                                Occupancy Type: {occupancyType}
                            </p>
                        </div>
                        <div className="card-header">
                            <h4>
                                <i className="fa fa-list" />
                                &nbsp; Property Details
                            </h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    {/* <label>Property Details</label> */}
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>Bedroom</th>
                                                <td>
                                                    {attributes.bedrooms &&
                                                    attributes.bedrooms !== 0
                                                        ? attributes.bedrooms
                                                        : '--'}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Bathroom</th>
                                                <td>
                                                    {attributes.bathrooms &&
                                                    attributes.bathrooms !== 0
                                                        ? attributes.bathrooms
                                                        : '--'}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Car Space</th>
                                                <td>
                                                    {attributes.carSpaces &&
                                                    attributes.carSpaces !== 0
                                                        ? attributes.carSpaces
                                                        : '--'}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Lock-up Garage</th>
                                                <td>
                                                    {attributes.lockUpGarages &&
                                                    attributes.lockUpGarages !==
                                                        0
                                                        ? attributes.lockUpGarages
                                                        : '--'}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Floor Area</th>
                                                <td>
                                                    {attributes.floorArea &&
                                                    attributes.floorArea !== 0
                                                        ? attributes.floorArea
                                                        : '--'}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-6">
                                    {/* <label>Construction Details</label> */}
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>Land Area</th>
                                                <td>
                                                    {attributes.landArea &&
                                                    attributes.landArea !== 0
                                                        ? attributes.landArea
                                                        : '--'}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Land Area Source</th>
                                                <td>
                                                    {attributes.landAreaSource &&
                                                    attributes.landAreaSource !==
                                                        0
                                                        ? attributes.landAreaSource
                                                        : '--'}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Roof Material</th>
                                                <td>
                                                    {attributes.roofMaterial &&
                                                    attributes.roofMaterial !==
                                                        0
                                                        ? attributes.roofMaterial
                                                        : '--'}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Wall Material</th>
                                                <td>
                                                    {attributes.wallMaterial &&
                                                    attributes.wallMaterial !==
                                                        0
                                                        ? attributes.wallMaterial
                                                        : '--'}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Year Built</th>
                                                <td>
                                                    {attributes.yearBuilt &&
                                                    attributes.yearBuilt !== 0
                                                        ? attributes.yearBuilt
                                                        : '--'}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {photos.length !== 0 ? (
                            <div>
                                <div className="card-header">
                                    <h4>
                                        <i className="fa fa-images" />
                                        &nbsp; Photos
                                        <button
                                            className="btn-primary btn-sm float-right"
                                            data-toggle="collapse"
                                            data-target="#photoGallery"
                                            title={'Show Photos'}
                                        >
                                            <i className="fa fa-arrow-circle-down" />
                                        </button>
                                    </h4>
                                </div>
                                <div
                                    className="card-body collapse show"
                                    id="photoGallery"
                                >
                                    <Gallery
                                        photos={photos}
                                        column={column()}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="card-body">
                                <div className="alert alert-info">
                                    No Image Available
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-md-1" />
            </div>
        </div>
        // )
    );
};

export default PropertyDetails;
