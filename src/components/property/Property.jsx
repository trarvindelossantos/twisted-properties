import React, { Component } from 'react'

class Property extends Component {



  render() {

    const { property } = this.props.property;

    return (
      <div>


        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="card mb-3">
              <div className="card-body bg-primary text-white">       <h3 className="card-title">Property Type: {property.propertySubType}</h3>
                <p className="card-text disabled">Occupancy Type: {property.occupancyType}</p></div>
              <div className="card-header">
                <h4>About This Property</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <label>Property Details</label>
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Bedroom</th>
                          <td>{(property.attributes.bedrooms && property.attributes.bedrooms !== 0) ? property.attributes.bedrooms : "--"}</td>
                        </tr>
                        <tr>
                          <th>Bathroom</th>
                          <td>{(property.attributes.bathrooms && property.attributes.bathrooms !== 0) ? property.attributes.bathrooms : "--"}</td>
                        </tr>
                        <tr>
                          <th>Car Space</th>
                          <td>{(property.attributes.carSpaces && property.attributes.carSpaces !== 0) ? property.attributes.carSpaces : "--"}</td>
                        </tr>
                        <tr>
                          <th>Lock-up Garage</th>
                          <td>{(property.attributes.lockUpGarages && property.attributes.lockUpGarages !== 0) ? property.attributes.lockUpGarages : "--"}</td>
                        </tr>
                        <tr>
                          <th>Floor Area</th>
                          <td>{(property.attributes.floorArea && property.attributes.floorArea !== 0) ? property.attributes.floorArea : "--"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <label>Construction Details</label>
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Land Area</th>
                          <td>{(property.attributes.landArea && property.attributes.landArea !== 0) ? property.attributes.landArea : "--"}</td>
                        </tr>
                        <tr>
                          <th>Land Area Source</th>
                          <td>{(property.attributes.landAreaSource && property.attributes.landArea !== 0) ? property.attributes.landArea : "--"}</td>
                        </tr>
                        <tr>
                          <th>Roof Material</th>
                          <td>{(property.attributes.roofMaterial && property.attributes.roofMaterial !== 0) ? property.attributes.roofMaterial : "--"}</td>
                        </tr>
                        <tr>
                          <th>Wall Material</th>
                          <td>{(property.attributes.wallMaterial && property.attributes.wallMaterial !== 0) ? property.attributes.wallMaterial : "--"}</td>
                        </tr>
                        <tr>
                          <th>Year Built</th>
                          <td>{(property.attributes.yearBuilt && property.attributes.yearBuilt !== 0) ? property.attributes.yearBuilt : "--"}</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>



      </div>



    )
  }
}

export default Property