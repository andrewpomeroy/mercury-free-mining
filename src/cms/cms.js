import React from 'react';
import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import { NetlifyCmsEditorComponentImage } from 'netlify-cms-editor-component-image';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import CustomPagePreview from './preview-templates/CustomPagePreview';
import TestPagePreview from './preview-templates/TestPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import StaticCSSInjector from './StaticCSSInjector';
import ThemeProvider from '../components/ThemeProvider';
import GlobalStyleWrapper from '../components/GlobalStyleWrapper';
import { TestWidgetControl, TestWidgetPreview } from '../widgets/testWidget';
import withEmotion from './withEmotion';
import FloatImage from '../components/FloatImage';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerEditorComponent({
  ...NetlifyCmsEditorComponentImage,
  id: 'image2',
});

CMS.registerEditorComponent({
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
  toPreview: (obj, getAsset, fields) => {
    const imageField = fields?.find(f => f.get('widget') === 'image');
    const src = getAsset(obj.image, imageField);
    return (
      <div>
        <StaticCSSInjector>
          <pre>{JSON.stringify(obj.image)}</pre>
          <pre>{JSON.stringify(src)}</pre>
          {/* src={src || ''} */}
          <FloatImage
            image={obj.image || ''}
            alt={obj.alt || ''}
            title={obj.title || ''}
            align={obj.align || null}
          />
        </StaticCSSInjector>
      </div>
    );
  },
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
});

CMS.registerWidget('testWidget', TestWidgetControl, TestWidgetPreview);

// const Inner = props

const PreviewShim = element =>
  withEmotion(props => (
    <ThemeProvider>
      <GlobalStyleWrapper>{element(props)}</GlobalStyleWrapper>
    </ThemeProvider>
  ));

CMS.registerPreviewTemplate('index', PreviewShim(IndexPagePreview));
CMS.registerPreviewTemplate('about', PreviewShim(AboutPagePreview));
CMS.registerPreviewTemplate('products', PreviewShim(ProductPagePreview));
CMS.registerPreviewTemplate('test', PreviewShim(TestPagePreview));
CMS.registerPreviewTemplate('custom', PreviewShim(CustomPagePreview));
CMS.registerPreviewTemplate('blog', PreviewShim(BlogPostPreview));
