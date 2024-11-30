"use client";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import "https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css";

export default function Page() {
    const Map = ReactMapboxGl({
        accessToken: 'pk.eyJ1IjoiZGFydW1hMjM3IiwiYSI6ImNtM3NqNGRldTA2MDAyaXNuZXpmaGJ4cnIifQ.GVBf4Uyd0qqnX7c7e3w5PA'
    });
    return (
        <div>
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[47.240308, -1.582378]} />
                </Layer>
            </Map>
        </div>
    )
}