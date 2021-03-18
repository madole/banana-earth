import * as React from 'react';
import {useRef} from 'react';
import {Entity, ModelGraphics, Viewer} from 'resium'
import './App.css';
import {Cartesian3} from 'cesium'
import {useInterval} from "./useInterval";


function App() {
    const ref = useRef(null);
    const [position, setPosition] = React.useState(Cartesian3.fromDegrees(151.2093, -33.8688, 2000.0))
    useInterval(() => {
        const getISSPosition = async () => {
            const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
            const json = await response.json()
            const {altitude, latitude, longitude} = json
            setPosition(Cartesian3.fromDegrees(longitude, latitude, altitude * 1000))
        }
        getISSPosition()
    }, 5000)

    return (
        <Viewer ref={ref} style={{position:'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
            <Entity position={position}>
                <ModelGraphics uri={"/banana.gltf"} minimumPixelSize={200} maximumPixelSize={500}/>
            </Entity>
        </Viewer>
    );
}

export default App;
