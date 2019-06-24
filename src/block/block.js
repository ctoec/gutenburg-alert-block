/**
 * BLOCK: alert
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.editor;

registerBlockType('simple/alert', {
    title: __('Simple Alert'),
    description: __('Renders text in a yellow box'),
    icon: 'shield-alt',
    category: 'common',
    keywords: [
        __('alert'),
        __('simple alert')
    ],
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'div',
        },
    },
    edit: function ({ attributes, setAttributes, className, isSelected }) {
        return (
            <RichText
                tagName="div"
                className={`${className} bg-yellow padding-2 margin-top-2`}
                value={attributes.content}
                onChange={(content) => setAttributes({ content })}
                placeholder={__('Enter text...', 'custom-block')}
                keepPlaceholderOnFocus={true}
            />
        );
    },
    save: function( { attributes } ) {
        return (
            <RichText.Content tagName="div" value={ attributes.content } />
        );
    }
});
