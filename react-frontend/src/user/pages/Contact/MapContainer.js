import { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'

class MapContainer extends Component{
    render(){
        return(
            <Map
                google={this.props.google}
                style={{width:'1000px', height: '500px',position: "relative !important"}}
                zoom={10}
                initialCenter={
                   {
                    lat: 10.80657,
                    lng: 106.714058
                   } 

                }
                className="map-container"
            
            />
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDOaqNFgjppnTVQc_5am5bab_eJD_hl8zI"
})(MapContainer);