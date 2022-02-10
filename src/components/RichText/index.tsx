import React from 'react';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';

const components: Partial<PortableTextReactComponents> = {
	types: {
		p: ({ children }) => <p className="mb-2">{children}</p>
	},
	marks: {
		p: ({ children }) => <p className="mb-2">{children}</p>
	},
	block: {
		h1: ({ children }) => <h1 className="mb-4 text-3xl">{children}</h1>,
		h2: ({ children }) => <h2 className="mb-4 text-2xl">{children}</h2>,
		h3: ({ children }) => <h3 className="mb-3 text-xl">{children}</h3>,
		h4: ({ children }) => <h4 className="mb-3 text-lg font-bold">{children}</h4>,
		h5: ({ children }) => <h5 className="mb-2 text-lg">{children}</h5>,
		h6: ({ children }) => <h6 className="mb-2 text-md">{children}</h6>,
		p: ({ children }) => <p className="mb-2">{children}</p>
	}
};
const RichText = ({ blocks }) => {
	return <PortableText value={blocks} components={components} />;
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
