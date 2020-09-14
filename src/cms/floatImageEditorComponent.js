import React from 'react';
import StaticCSSInjector from './StaticCSSInjector';
import FloatImage from '../components/FloatImage';

export const FloatImagePreview = (obj, getAsset, fields) => {
  return (
    <div>
      <StaticCSSInjector>
        <FloatImage
          image={obj.image || ''}
          alt={obj.alt || ''}
          title={obj.title || ''}
          align={obj.align || null}
        />
      </StaticCSSInjector>
    </div>
  );
};

const floatImageEditorComponent = {
  id: 'image',
  label: 'Image',
  // Pattern to identify a block as being an instance of this component
  pattern: /^<float-image\s*(?:image="([^"]*)")?\s*(?:alt="([^"]*)")?\s*(?:title="([^"]*)")?\s*(?:align="([^"]*)")?[^>*]*><\/float-image>/,
  // Function to extract data elements from the regexp match
  fromBlock(match) {
    return {
      image: match[1],
      alt: match[2],
      title: match[3],
      align: match[4],
    };
  },
  toBlock: ({ alt, image, title, align }) => {
    // eslint-disable-next-line
    return `<float-image image="${image || ''}" alt="${alt || ''}" title="${title || ''}" ${align ? `align="${align}"` : ''} ></float-image>`;
  },
  toPreview: FloatImagePreview,
  fields: [
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      media_library: {
        allow_multiple: false,
      },
    },
    {
      label: 'Alt Text',
      name: 'alt',
    },
    {
      label: 'Title',
      name: 'title',
    },
    {
      label: 'Align',
      name: 'align',
      widget: 'select',
      default: [
        {
          label: 'Default',
          value: null,
        },
      ],
      options: [
        {
          label: 'Default',
          value: null,
        },
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
    },
  ],
};

export default floatImageEditorComponent;
