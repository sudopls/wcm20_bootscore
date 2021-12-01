const { registerBlockType } = wp.blocks;
const { TextControl, TextareaControl} = wp.components;
const { RichText } = wp.editor;

registerBlockType('wcms20/firstblock', {
    title: 'My First Block',
    category: 'layout',
    icon: 'smiley',
    description: 'Our very first block',
    attributes: {
        exampleText: {
            type: 'string',
            default: 'Example Text'
        },
        myRichText: {
            // type: 'string',
            source: 'html',
            default: 'My Richie Rich text'
        }
    },
    edit: (props) => {
        console.log(props);
        const { attributes, setAttributes } = props;
        return (
            <div>
                <TextControl
                    tagName="h2"
                    value={attributes.exampleText}
                    onChange={(newtext) => setAttributes({exampleText: newtext})}
                />
                <RichText
                    tagName="h2"
                    value={attributes.myRichText}
                    onChange={(newtext) => setAttributes({ myRichText: newtext})}
                />
            </div>
        );
    },
    save: (props) => {
        const { attributes } = props;
        return (
            <div>
                <RichText.Content
                    tagName="h2"
                    value={attributes.myRichText}
                />
            </div>
        );
    }
});