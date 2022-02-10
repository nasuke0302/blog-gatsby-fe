import React from 'react';
import { PortableText } from '@portabletext/react';

const RichText = ({ blocks }) => {
	return <PortableText value={blocks} />;
};

export default RichText;

export function toPlainText(blocks) {
	if (!blocks) return '';
	return (
		blocks
			// loop through each block
			.map((block) => {
				// if it's not a text block with children,
				// return nothing
				if (block._type !== 'block' || !block.children) {
					return '';
				}
				// loop through the children spans, and join the
				// text strings
				return block.children.map((child) => child.text).join('');
			})
			// join the paragraphs leaving split by two linebreaks
			.join('\n\n')
	);
}
