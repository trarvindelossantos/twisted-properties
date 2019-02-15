import React, { Component } from 'react';
import Axios from 'axios'

import Property from '../components/property/Property';
import { Navbar } from '../components/layouts/Navbar';

class PropertyView extends Component {
    constructor() {
        super()
        this.state = {
            property: [],
            suggestion: [],
            loading: true,
        }
    }

    getPropertyDetail = (id) => {
        const prop = 'http://localhost:8080/api/property'
        const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJDUlQiLCJNQVAiLCJQVFkiLCJTR1QiLCJTVFMiLCJUVEwiXSwicm9sZXMiOltdLCJpc3MiOiJodHRwczovL2FjY2Vzcy11YXQtYXBpLmNvcmVsb2dpYy5hc2lhIiwiZW52X2FjY2Vzc19yZXN0cmljdCI6ZmFsc2UsImV4cCI6MTU1MDIzNDk3NSwiZ2VvX2NvZGVzIjpbIkFDVCAtIEZ1bGwgU3RhdGUiLCJOU1cgLSBNZXRybyIsIk5TVyAtIFJlZ2lvbmFsIiwiTlQgLSBGdWxsIFN0YXRlIiwiUUxEIC0gTWV0cm8iLCJRTEQgLSBSZWdpb25hbCIsIlNBIC0gTWV0cm8iLCJTQSAtIFJlZ2lvbmFsIiwiVEFTIC0gRnVsbCBTdGF0ZSIsIlZJQyAtIChBQSkgRnVsbCBTdGF0ZSIsIlZJQyAtIEZ1bGwgU3RhdGUiLCJWSUMgLSBNZXRybyIsIlZJQyAtIFJlZ2lvbmFsIiwiV0EgLSBNZXRybyIsIldBIC0gUmVnaW9uYWwiLCJOb3J0aCBJc2xhbmQiLCJTb3V0aCBJc2xhbmQiXSwiY2xpZW50X2lkIjoiNTE5ODNkMzYifQ.EIXjGEGbhNbpD-TcsxhGJVf0Pu-tnIeV5Joq4uW2SkkRHW4YXkv3QMPIuRvY6HJ_7_RJuCzFGqCbM2twe-e6mTF7Y12CCb_fRFNaZwsOmWhOruoRYgKXsEC5QzHVbG3qbH3CD4fHg8rdjFUyIiMjJci7lpSgRoGJbR6AuzbjBg4"

                    Axios.get(`${prop}/${id}`, { headers: { Authorization: `Bearer ${token}`, Accept: 'application/json'}}
                    )
                    .then(res => this.setState({
                        property: res.data,
                        loading: false,
                       
                    }))
    }

    componentDidMount() {
        const id  = this.props.match.params.id
        this.getPropertyDetail(id)
    }
    render() {
    return(
        <div>
            <Navbar />
            <br />
            <main className="container-fluid">
               {!this.state.loading && (<Property property={this.state.property}/>)} 
            </main>
        </div >
        )
    }
    }

export default PropertyView