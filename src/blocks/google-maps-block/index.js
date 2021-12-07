const BLOCK_NAME = 'wcms-maps/google-map';
const BLOCK_TITLE = wp.i18n._x( 'Google Map', 'wcms20-blocks', 'wcms-maps' );
const BLOCK_DESCRIPTION = wp.i18n._x( 'Add a nice map!', 'wcms20-blocks', 'wcms-maps' );

// Internal dependencies

export const name = BLOCK_NAME;
export const settings = {
    title: BLOCK_TITLE,
    description: BLOCK_DESCRIPTION,
    icon: 'heart',
    category: 'layout',
    keywords: [
        _x( 'Location', 'wcms20-blocks', 'wcms-maps'),
    ],

    attributes,
    edit: GoogleMapEdit,
    save: GoogleMapSave,
};