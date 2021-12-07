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

const googleMapsApiKey = '';
const GOOGLE_MAPS_URL = 'https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places';

// Build map here