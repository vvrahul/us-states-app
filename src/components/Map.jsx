//import { ReactComponent as MapImage } from './map.svg';
import MapSvg from './MapSvg';

const  Map = (props) => {
    return (
        <div>
            
            <div className="map-content">
                <div className="map-title">
                    <h1>User visits</h1>
                    <select name="visits" id="visits" onChange={props.handleSelectChange} value={props.visits}>
                        <option value="250">0 - 250</option>
                        <option value="500">250 - 500</option>
                        <option value="1000">500 - 1000</option>
                        <option value="1001">1000+</option>
                    </select>
                </div>
                
                <MapSvg className="map-image" usStates={props.usStates} />
            </div>
        </div>

    );
}

export default Map;