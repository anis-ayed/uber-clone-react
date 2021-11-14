import {useEffect} from "react";
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

const Map = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pc2F5ZWQiLCJhIjoiY2t2d2prejVtYTNrbzJucXdoZGRtMWRzZCJ9.iOOi0LeGaYBZ4Zq3yKiFaw'
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [-99.29011, 39.39172],
            zoom: 3
        });
    });
    return(
        <Wrapper id="map">

        </Wrapper>
    )
}
export default Map
const Wrapper = tw.div`
flex-1
`