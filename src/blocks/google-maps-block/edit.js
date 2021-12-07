/*
* WordPress dependencies
*/

import { _x } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import {
    Component,
    Fragment,
} from '@wordpress/element';

/*
* External dependencies
*/
import classnames from 'classnames';

/*
* Internal dependencies
*/
import Inspector from './inspector';
const googleMapsApiKey = '';
const GOOGLE_MAPS_URL = 'https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places';

// Build map here
export default class GoogleMapEdit extends Component {
    render() {
        const {
            attributes: {
                zoom,
            },
            // setAttributes,
        };

        // const options = {
        //     zoomControl: true,
        // }

        // googleMapUrl
        return (
            <Fragment>
                Here be map
                <Inspector />
            </Fragment>
        );
    };

}