import * as React from 'react';
import {useRef} from 'react';
import {Entity, ModelGraphics, Polyline, PolylineCollection, Viewer} from 'resium'
import './App.css';
import {Cartesian3, CesiumTerrainProvider, Color, Ion, IonResource, Material} from 'cesium'
import {useInterval} from "./useInterval";

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjMjk3OGRkNS0zZTZjLTQyZGYtYjAzNy1lYTk5NmY3NDkyZTMiLCJpZCI6MzMxMzksInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1OTgwNjc1ODh9.KjJzjblyvrJlF0WkZZznyR6FXfNZY432yc19DtT1Ozc'

const GLOW_MATERIAL = Material.fromType(Material.PolylineGlowType, {
    glowPower: 0.1,
    color: new Color(1.0, 0.5, 0.0, 1.0)
});

const TERRAIN_PROVIDER = new CesiumTerrainProvider({
    url: IonResource.fromAssetId(1),
})

function App() {
    const ref = useRef(null);
    const [position, setPosition] = React.useState(Cartesian3.fromDegrees(151.2093, -33.8688, 2000.0))
    const [snailTrail, setSnailTrail] = React.useState([])
    React.useEffect(() => {
        console.log(ref.current)
        ref.current.cesiumElement.animation.container.style.visibility = 'hidden';
        ref.current.cesiumElement.timeline.container.style.visibility = 'hidden';
        ref.current.cesiumElement.scene.globe.enableLighting = true;
        ref.current.cesiumElement.forceResize();
    }, [])
    useInterval(() => {
        const getISSPosition = async () => {
            const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
            const json = await response.json()
            const {altitude, latitude, longitude} = json
            const nextPosition = Cartesian3.fromDegrees(longitude, latitude, altitude * 1000)
            setPosition(Cartesian3.fromDegrees(longitude, latitude, altitude * 1000))
            setSnailTrail([...snailTrail, nextPosition])
        }
        getISSPosition()
    }, 5000)

    return (
        <Viewer ref={ref} style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}} baseLayerPicker={false}
                terrainProvider={TERRAIN_PROVIDER}>
            <Entity position={position}>
                <ModelGraphics uri={"/banana.gltf"} minimumPixelSize={200} maximumPixelSize={500}/>
            </Entity>
            <PolylineCollection>
                <Polyline positions={snailTrail} width={20} show={true} material={GLOW_MATERIAL}/>
            </PolylineCollection>
        </Viewer>
    );
}

export default App;
